import { createMachine, assign } from 'xstate';
// this needs to be here we can't fetch it twice and it's a toy app
const data = require('./observations.json')

export const createFilter = ({
    to = null,
    from = null,
    description = null,
    sensor = null
}) => ({ to, from, description, sensor })

const filters = {
  to: (properties, filter) => {
    console.log(properties.observed_on, filter) 
    return Number(properties.observed_on) < Number(filter) 
  },
  from: (properties, filter) => {
    console.log(Number(properties.observed_on), Number(filter), Number(properties.observed_on) > Number(filter))
    return Number(properties.observed_on) > Number(filter)
  },
  description: (test, filter) => test.contains(filter),
  sensor: (test, filter) => {
    return test === filter
  },
}

const handleFilter = (context, event) => {
  let features = context.geoJson.features.filter((el) => {
    for (let key of Object.keys(event.payload)) {
      if (
        event.payload[key] !== null 
        && !filters[key](el.properties, event.payload[key]) 
      ) {
        return false;
      }
    }
    return true;
  })
  console.log(features)
  return { features }
}

export const geoJson = createMachine({
  id: 'geoJson',
  initial: 'idle',
  context: {
    url: null,
    geoJson: null,
    toDisplay: null,
    cart: [],
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading',
        FILTER: {
          target: 'resolved',
          actions: assign({
            toDisplay:  (context, event) => {
              return handleFilter(context, event)
            }
          })
        },
        ADD_TO_CART: 'addToCart',
        CHECKOUT: 'checkout'
      }
    },
    checkout: {
      invoke: {
        id: 'checkoutGeoJson',
        src: (context, event) => {
          return fetch('http://localhost:3000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(context.cart)
          })
        }
      },
      onDone: {
        target: 'resolved',
        actions: assign({
          cart: (_, event) => [],
          cartMessage: 'checkout complete'
        })
      },
      onError: {
        target: 'resolved',
        actions: assign({
          cart: (_, event) => [],
          cartMessage: 'checkout complete'
        })
      }
    },
    loading: {
      invoke: {
        id: 'fetchGeoJson',
        src: (context, event) => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(data)
                }, 500)
            })
        },
        onDone: {
          target: 'clone',
          actions: assign({
            geoJson: (_, event) => {
                return { features: event.data.features.map((el, i) => {
                  return { ...el, properties: { ...el.properties, id: Number(i) } }
                }) }
            },
          })
        },
        onError: 'rejected'
      },
      on: {
        CANCEL: 'idle'
      }
    },
    clone: {
      target: 'resolved',
      entry: assign({
          toDisplay: (_, event) => {
            return JSON.parse(JSON.stringify(_.geoJson))
          },
          url: (_, event) => {
                return window.URL.createObjectURL(
                    new Blob([
                        JSON.stringify(event.data)
                    ], { type: "text/json"}))
            }
        }),
      always: 'resolved'
    },
    resolved: {
      always: 'idle'
    },
    rejected: {
      on: {
        FETCH: 'loading'
      }
    },
    addToCart: {
        always: 'idle',
        entry: assign({
          cart: (_, event) => {
            let item = _.geoJson.features[event.id]
            return [..._.cart, item]
          }
        })
    }
  },
});

export let addToCart = (send, id) => {
  send('ADD_TO_CART', { id })
}
