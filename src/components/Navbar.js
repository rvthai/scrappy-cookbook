import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../stylesheets/Navbar.css";
class Navbar extends Component {
  componentDidMount = () => {
    const page = this.props.location.pathname;
    var id = "";
    if (page === "/") {
      id = "home";
    } else if (page === "/bookmarks") {
      id = "bookmarks";
    } else if (page === "/recipes") {
      id = "recipes";
    } else {
      return;
    }

    const links = document.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    const t = document.getElementById(id);
    t.classList.add("active");
  };

  setActive = (event) => {
    const links = document.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    const t = document.getElementById(event.target.id);
    t.classList.add("active");
  };

  render() {
    return (
      <nav>
        <div className="brand">
          <Link className="logo" to="/">
            Scrappy Cookbook
          </Link>
        </div>
        <div className="links">
          <Link id="home" onClick={this.setActive} className="link" to="/">
            Home
          </Link>
          <Link
            id="recipes"
            onClick={this.setActive}
            className="link"
            to="/recipes"
          >
            Recipes
          </Link>
          <Link
            id="bookmarks"
            onClick={this.setActive}
            className="link"
            to="/bookmarks"
          >
            Bookmarks
          </Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
