import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { WebMapView } from './components/Map/Map'
import { Header } from './components/Header'
import { ListView } from './components/ListView'



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route path="/list">
              <ListView />
          </Route>
          <Route path="/cart">
            {/* { cart } */}
          </Route>
          <Route path="/checkout">
            {/* { checkout } */}
          </Route>
          <Route path="/">
            <WebMapView />
            {/* TODO: ADD LOADING STATE */}
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;

