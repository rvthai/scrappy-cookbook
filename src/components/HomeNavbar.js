import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/HomeNavbar.css";

// Icons
import { falinkCircle, faCookieBite } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
class HomeNavbar extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="nav-1">
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

export default HomeNavbar;
