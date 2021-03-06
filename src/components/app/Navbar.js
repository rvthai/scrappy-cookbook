import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "stylesheets/app/Navbar.css";

// Images
import Logo from "assets/logo.png";

class Navbar extends Component {
  componentDidMount() {
    const current_location = this.props.location.pathname;
    this.setCurrentLink(current_location);

    this.unlisten = this.props.history.listen((location) => {
      this.resetLinks();
      this.setCurrentLink(location.pathname);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  resetLinks = () => {
    const links = document.getElementsByClassName("link");

    for (var i = 0; i < links.length; i++) {
      links[i].style.opacity = 0.75;
    }
  };

  setCurrentLink = (location) => {
    var navbar = document.getElementById("nav-wrapper");

    if (location === "/") {
      document.getElementById("home").style.opacity = 1;
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else if (location === "/bookmarks") {
      document.getElementById("bookmarks").style.opacity = 1;
      navbar.style.backgroundColor = "rgba(33, 33, 33, 1)";
    } else {
      document.getElementById("recipes").style.opacity = 1;
      navbar.style.backgroundColor = "rgba(33, 33, 33, 1)";
    }
  };

  render() {
    return (
      <div id="nav-wrapper" className="nav-wrapper">
        <nav>
          <Link className="brand" to="/">
            <img className="logo" alt="scrappy-cookbook-logo" src={Logo} />
            Scrappy Cookbook
          </Link>
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
      </div>
    );
  }
}

export default withRouter(Navbar);
