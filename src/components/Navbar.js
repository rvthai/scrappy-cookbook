import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/Navbar.css";

import Logo from "../assets/logo.png";
class Navbar extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="nav-2">
          <Link className="brand" to="/">
            <img className="logo" src={Logo} />
            Scrappy Cookbook
          </Link>
          <div className="links">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/recipes">
              Recipes
            </Link>
            <Link className="link" to="/bookmarks">
              Bookmarks
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
