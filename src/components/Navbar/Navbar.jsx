import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./navbar.css"

function Navbar() {
  return (
    <nav>
          <img className="logo" src={logo} alt="Cassiano's Logo"/>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
      </nav>

  );
}

export default Navbar;
