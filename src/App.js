import React from 'react'
import './styles/app.css'
import ColorChanger from './components/ColorChanger'
import JavascriptLand from './components/JavascriptLand'
import GitHubUserFinder from './components/GitHubUserFinder'
import ErrorBoundary from './components/ErrorBoundary'
import TreeHouse from './components/TreeHouse'
import ColorMaker from './components/ColorMaker'
import Animation from './components/Animation'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ParallaxPlayground from './components/ParallaxPlayground'
import Footer from './components/ui/Footer'
import { Menu } from 'react-feather'
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <nav className="menu">
            <div className="menu-container">
              <div className="menu-item">
                <Link to="/animation">Animation</Link>
              </div>
              <div className="menu-item">
                <Link to="/home">Home</Link>
              </div>
              <div className="menu-item">
                <Link to="/github-user-finder">GitHub User Finder</Link>
              </div>
              <div className="menu-item">
                <Link to="/color-changer">Color Changer</Link>
              </div>
              <div className="menu-item">
                <Link to="/javascript-land">JavascriptLand</Link>
              </div>
              <div className="menu-item">
                <Link to="/tree-house">Tree House</Link>
              </div>
              <div className="menu-item">
                <Link to="/parallax-playground">Parallax Playground</Link>
              </div>
              <div className="menu-item">
                <Link to="/color-maker">Color Maker</Link>
              </div>
            </div>
            <div className="hamburger">
              <Menu size={32} />
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/animation">
              <Animation />
            </Route>
            <Route path="/color-changer">
              <ColorChanger />
            </Route>
            <Route path="/javascript-land">
              <JavascriptLand />
            </Route>
            <Route path="/tree-house">
              <TreeHouse />
            </Route>
            <Route path="/parallax-playground">
              <ParallaxPlayground />
            </Route>
            <Route path="/color-maker">
              <ColorMaker />
            </Route>
            <Route path="/">
              <GitHubUserFinder />
            </Route>
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  )
}
