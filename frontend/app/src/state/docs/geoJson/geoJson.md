# GEOJSON XSTATE

The point of this machine is to fetch and de-normalize the state so that we can access each object by id, the geoJSON layer from gic seems to assign an objectid by default, there is also uuid. The goal of this module it to use either of as a key. 

This way we can share state between the map and the table. In order to use this state in the map component we need to create a url to the object in memory. 

If the map component has not been loaded we need to send the fetch action to our statemachine.

![img](./geoJsonStateMachine.png)

```
const swService = interpret(fetchMachine)
  .onTransition((state) => console.log(state.value))
  .start();

swService.send('FETCH');
```