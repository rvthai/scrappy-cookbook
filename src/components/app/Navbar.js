import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import "stylesheets/app/Navbar.css";

// Images
import Logo from "assets/logo.png";

// Actions
import { resetRecipes, resetSearch } from "actions";

class Navbar extends Component {
  componentDidMount() {
    const original_location = this.props.location.pathname;
    this.setCurrentLink(original_location);

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
    } else if (location === "/recipes") {
      document.getElementById("recipes").style.opacity = 1;
      navbar.style.backgroundColor = "rgba(33, 33, 33, 1)";
    } else {
      document.getElementById("bookmarks").style.opacity = 1;
      navbar.style.backgroundColor = "rgba(33, 33, 33, 1)";
    }
  };

  handleHomeReturn = () => {
    this.props.resetRecipes();
    this.props.resetSearch();
  };

  render() {
    return (
      <div id="nav-wrapper" className="nav-wrapper">
        <nav>
          <Link className="brand" to="/" onClick={this.handleHomeReturn}>
            <img className="logo" alt="scrappy-cookbook-logo" src={Logo} />
            Scrappy Cookbook
          </Link>
          <div className="links">
            <Link
              id="home"
              className="link"
              to="/"
              onClick={this.handleHomeReturn}
            >
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

const mapDispatchToProps = {
  resetRecipes,
  resetSearch,
};

export default connect(null, mapDispatchToProps)(withRouter(Navbar));
