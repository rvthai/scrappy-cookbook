import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

class HomeNavbar extends Component {
  render() {
    return (
      <nav className="nav-1">
        <Link className="logo" to="/">
          SCRAPPY COOK
        </Link>
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/recipes">
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
