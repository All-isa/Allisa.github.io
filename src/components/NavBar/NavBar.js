import React, { Component } from "react";
import "./Nav.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../../Pages/About";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
import Portfolio from "../../Pages/Portfolio";
import Resume from "../../Pages/Resume";

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home />
    },
    {
      path: "/about",
      main: () => <About />
    },
    {
      path: "/portfolio",
      main: () => <Portfolio />
    },
    {
      path: "/contact",
      main: () => <Contact />
    },
    {
      path: "/resume",
      main: () => <Resume />
    }
  ];

class NavBar extends Component {
    render () {
        return (
            <Router>
    <div className="container">
        <div className="nav nav-tabs justify-content-center">
            <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link text-dark" role="tab" aria-controls="home" aria-selected="false" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" role="tab" aria-controls="about" aria-selected="false" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" role="tab" aria-controls="profile" aria-selected="false" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" role="tab" aria-controls="resume" aria-selected="false" to="/resume" >Resume</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" role="tab" aria-controls="contact" aria-selected="false" to="/contact">Contact</Link>
            </li>
          </ul>
  
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>
  
        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
    </div>
    </Router>
        );
    }
} 

export default NavBar;