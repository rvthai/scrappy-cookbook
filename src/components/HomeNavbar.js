import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/HomeNavbar.css";

class HomeNavbar extends Component {
  render() {
    return (
      <nav>
        <div className="brand">
          <Link id="logo" className="logo" to="/">
            Scrappy Cookbook
          </Link>
        </div>
        <div className="links">
          <Link id="home" className="link" to="/">
            Home
          </Link>
          <Link id="recipes" className="link" to="/recipes">
            Recipes
          </Link>
          <Link id="bookmarks" className="link" to="/bookmarks">
            Bookmarks
          </Link>
        </div>
      </nav>
    );
  }
}

export default HomeNavbar;
