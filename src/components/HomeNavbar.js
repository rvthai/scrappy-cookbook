import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

class HomeNavbar extends Component {
  render() {
    return (
      <nav className="nav-1">
        <Link id="home" className="link" to="/">
          Scraps
        </Link>
        <Link id="bookmarks" className="link" to="/bookmarks">
          B
        </Link>
      </nav>
    );
  }
}

export default HomeNavbar;
