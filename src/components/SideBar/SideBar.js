import React from "react";
import "./SideBar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../../Pages/About";
import Home from "../../Pages/Home";
// import Contact from "../../Pages/Contact";
// import Portfolio from "../../Pages/Portfolio";

const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <Home />
    },
    {
      path: "/about",
      sidebar: () => <div>About Me!</div>,
      main: () => <About />
    },
    {
      path: "/portfolio",
      sidebar: () => <div>My Portfolio!</div>,
      main: () => <h2>Hello World!  Welcome to my Portfolio Page!</h2>
    }
  ];

const SideBar = () => (
    <Router>
      <div style={{ display: "flex" }}>
        <div id="sidebar-list">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
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
  
  export default SideBar;