import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <h1 className="logo">Scrappy Cookbook</h1>
        </div>
        <div className="navbar-right">
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
      </div>
    );
  }
}

export default Navbar;
