import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { WebMapView } from './components/Map/Map';
import { Header } from './components/Header';
import { ListView } from './components/ListView';
import { Filter } from './components/Filter';
import { Cart } from './components/Cart';

import { useMachine } from '@xstate/react';
import { geoJson } from './state/geoJson';

function App() {
  const [current, send] = useMachine(geoJson, { devTools: true });

  useEffect(() => {
    if (current.context.geoJson === null) {
      send('FETCH')
    }
  }, [current, send])

  return (
    <Router>
    <div className="App">
      <Header/>
      <Filter current={current} send={send} />
      <main>
        <Switch>
          <Route path="/list">
          { 
            current.context.toDisplay !== null ?
              <ListView current={current} items={current.context.toDisplay} send={send} /> 
              : "Loading" 
          }
          </Route>
          <Route path="/cart">
              <Cart items={current.context.cart} send={send} />
          </Route>
          <Route path="/" exact>
            { 
              current.context.url !== null
                ?  <WebMapView url={current.context.url} send={send} /> 
                : "...loading geoJson" 
              }
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;

