import React, { useEffect, useRef } from 'react'
import { loadModules } from 'esri-loader';
import { resolve } from 'path'

import { createMachine, interpret } from 'xstate';
import { Machine } from 'xstate';


const mapMachine = Machine({})

Machine({
    id: 'gismap',
    initial: 'inactive',
    states: {
      inactive: {
        on: { TOGGLE: 'active' }
      },
      active: {
        on: { TOGGLE: 'inactive' }
      }
    }
  });


export const WebMapView = () => {
  const mapRef = useRef();

  useEffect(
    () => {
    

      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', "esri/layers/GeoJSONLayer", "esri/support/popupUtils"], { css: true })
      .then(([ArcGISMap, MapView, GeoJSONLayer]) => {
        const map = new ArcGISMap({
          basemap: 'topo-vector'
        });
        // TODO: make this a prop
        const fields = [
            {
                name: "sensor",
                alias: "sensor",
                type: "string",
                valueType: "type-or-category"
            },
            {
                name: "description",
                alias: "description",
                type: "string",
                valueType: "description"
            },
            {
                name: "observed_on",
                alias: "last observed",
                type: 'date',
                valueType: 'date-ands-time',
            } 
        ];
        
        // TODO: make this a prop
        // Create the template and pass in the fields content
        var addToCartAction = {
            title: "Add to cart",
            id: "add-to-cart",
        };

        function addToCart() {
            console.log('bada bing')
        }

        const template = {
            title: "{OBJECTID}",
            content: [
                {
                  type: "fields",
                  fieldInfos: [
                    {
                        fieldName: "description",
                        label: "Description"
                    },
                    {
                      fieldName: "sensor",
                      label: "Sensor Type"
                    },
                    {
                      fieldName: "observed_on",
                      label: "Last observed"
                    }
                  ],
                }
            ],
            actions: [
                addToCartAction
            ]
        };
                // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [-118, 34],
          zoom: 8
        });

        view.popup.on('trigger-action', (event) => {
          // console.log(event)
          // ADD TO CART
          if (event.action.id === "add-to-cart") {
            console.log('add-to-cart')
          }
        })

        var geojsonLayer = new GeoJSONLayer({
            // json lives in the public folder atm
            url: resolve(process.env.PUBLIC_URL + '/observations.json'),
            copyright: "",
            outFields: ["sensor", "description", "observed_on"],
            fields,
            displayField: 'sensor',
            popupTemplate: template
        });

        geojsonLayer.on('add-to-cart', (ev) => {
          console.log(ev)
        })
        
        map.add(geojsonLayer)

        return () => {
          if (view) {
            // destroy the map view
            view.container = null;
          }
        };
      });
    }
  );

  return <div className="webmap" ref={mapRef} />;
};