import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="brand">
          <Link className="logo" to="/">
            Scrappy Cookbook
          </Link>
        </div>
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
    );
  }
}

export default Navbar;
