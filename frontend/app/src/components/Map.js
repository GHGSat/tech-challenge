import React, { useEffect, useRef } from 'react'
import { loadModules } from 'esri-loader';
import { resolve } from 'path'

export const WebMapView = () => {
  const mapRef = useRef();

  useEffect(
    () => {
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', "esri/layers/GeoJSONLayer", "esri/support/popupUtils"], { css: true })
      .then(([ArcGISMap, MapView, GeoJSONLayer, popupUtils]) => {
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

        const template = {
            content: ``,
            actions: [
                addToCartAction
            ]
        };

        function addToCart() {
            console.log('bada bing')
        }

          // Set the feature layer's popup template
        var geojsonLayer = new GeoJSONLayer({
            // json lives in the public folder atm
            url: resolve(process.env.PUBLIC_URL + '/observations.json'),
            copyright: "",
            outFields: ["sensor", "description", "observed_on"],
            fields,
            displayField: 'sensor',
            //popupEnabled: true,
            popupTemplate: template
          });

          geojsonLayer.on("trigger-action", function(event) {
            // Execute the measureThis() function if the measure-this action is clicked
            if (event.action.id === "add-to-cart") {
              addToCart();
            }
        });

        //geojsonLayer.popupTemplate = template
        map.add(geojsonLayer)

        // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [-118, 34],
          zoom: 8
        });

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