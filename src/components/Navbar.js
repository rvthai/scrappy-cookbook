import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/Navbar.css";

import Logo from "../assets/logo.png";

// Actions
import { resetRecipes, resetSearch } from "../actions";
class Navbar extends Component {
  componentDidMount() {
    const location = this.props.location.pathname;
    console.log(location);
    if (location === "/recipes") {
      var e = document.getElementById("recipes");
      e.style.opacity = 1;
    } else {
      var e = document.getElementById("bookmarks");
      e.style.opacity = 1;
    }
  }

  handleHomeReturn = () => {
    this.props.resetRecipes();
    this.props.resetSearch();
  };

  render() {
    return (
      <div className="wrapper">
        <nav className="nav-2">
          <Link className="brand" to="/" onClick={this.handleHomeReturn}>
            <img className="logo" src={Logo} />
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
