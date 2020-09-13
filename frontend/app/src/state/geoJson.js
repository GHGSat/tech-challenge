import { createMachine, assign } from 'xstate';
// this needs to be here we can't fetch it twice and it's a toy app
const data = require('./observations.json')

export const geoJson = createMachine({
  id: 'geoJson',
  initial: 'idle',
  context: {
    url: null,
    geoJson: null,
    dernormalized: null
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading'
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
          target: 'resolved',
          actions: assign({
            geoJson: (_, event) => {
                return event.data
            },
            dernormalized: (_, event) => {
                console.log(_, event)
            },
            url: (_, event) => {
                return window.URL.createObjectURL(
                    new Blob([
                        JSON.stringify(event.data)
                    ], { type: "text/json"}))
            }
          })
        },
        onError: 'rejected'
      },
      on: {
        CANCEL: 'idle'
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      on: {
        FETCH: 'loading'
      }
    }
  }
});

// const swService = interpret(geoJSON)
//   .onTransition((state) => console.log(state.value))
//   .start();

