import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { WebMapView } from './components/Map'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        {/* LOGO */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* SEARCH BAR */}
        <input type="search"></input>
        {/* USER ADMIN */}
      </header>
      {/* NAV BAR ON LEFT SIDE */}
      <aside>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/map">Map</Link>
          <Link to="/map">List</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
      </aside>
      {/* ROUTER CONTENT */}
      <main>
        <Switch>
          <Route path="/map">
          {/* { map } */}
          <WebMapView />
          </Route>
          <Route path="/list">
            {/* { list } */}
          </Route>
          <Route path="/cart">
            {/* { cart } */}
          </Route>
          <Route path="/checkout">
            {/* { checkout } */}
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;

