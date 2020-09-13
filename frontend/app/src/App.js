import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { WebMapView } from './components/Map/Map'
import { Header } from './components/Header'
import { ListView } from './components/ListView'

import { useMachine } from '@xstate/react';
import { geoJson } from './state/geoJson';

function App() {
  const [current, send] = useMachine(geoJson);

  useEffect(() => {
    send('FETCH')
  }, [current.matches('idle')])

  return (
    <Router>
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route path="/list">
          { 
            current.matches('resolved') ? 
              <ListView context={current.context} action={send} /> 
              : "Loading" 
          }
          </Route>
          <Route path="/cart">
            {/* { cart } */}
          </Route>
          <Route path="/checkout">
            {/* { checkout } */}
          </Route>
          <Route path="/">
            { 
              current.matches('resolved') 
                ?  <WebMapView geoJson={current} action={send} /> 
                : "...loading geoJson" 
              }
           
            {/* TODO: ADD LOADING STATE */}
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;

