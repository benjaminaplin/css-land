import React from "react";
import './App.css';
import ColorChanger from './components/ColorChanger'
import JavascriptLand from './components/JavascriptLand'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/color-changer">Color Changer</Link>
            </li>
            <li>
              <Link to="/javascript-land">JavascriptLand</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/color-changer">
            <ColorChanger />
          </Route>
          <Route path="/javascript-land">
            <JavascriptLand />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


