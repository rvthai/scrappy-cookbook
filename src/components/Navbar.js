import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../stylesheets/Navbar.css";
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "link",
      logoClass: "logo",
    };
  }
  componentDidMount = () => {
    const page = this.props.location.pathname;
    const links = document.getElementsByClassName("link");
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

    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    const t = document.getElementById(id);
    t.classList.add("active");

    if (id === "recipes" || id === "bookmarks") {
      this.changeStyle(links, id);
    } else {
      this.changeStyle2(links, id);
    }
  };

  changeStyle = (links, t) => {
    const nav = document.getElementById("nav");
    nav.classList.add("nav2");
    nav.classList.remove("nav");
    this.setState(
      {
        class: "link2",
        logoClass: "logo2",
      },
      () => {
        const a = document.getElementById(t);
        a.classList.add("active");
      }
    );
  };

  changeStyle2 = (links, t) => {
    const nav = document.getElementById("nav");
    nav.classList.add("nav");
    nav.classList.remove("nav2");
    this.setState(
      {
        class: "link",
        logoClass: "logo",
      },
      () => {
        const a = document.getElementById(t);
        a.classList.add("active");
      }
    );
  };

  setActive = (event) => {
    var id = event.target.id;
    if (id === "logo") {
      id = "home";
    }
    const links = document.getElementsByClassName(this.state.class);
    console.log(links);
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    const t = document.getElementById(id);
    if (id === "recipes" || id === "bookmarks") {
      this.changeStyle(links, id);
    } else {
      this.changeStyle2(links, id);
    }
  };

  render() {
    return (
      <nav id="nav">
        <div className="brand">
          <Link
            id="logo"
            onClick={this.setActive}
            className={this.state.logoClass}
            to="/"
          >
            Scrappy Cookbook
          </Link>
        </div>
        <div className="links">
          <Link
            id="home"
            onClick={this.setActive}
            className={this.state.class}
            to="/"
          >
            Home
          </Link>
          <Link
            id="recipes"
            onClick={this.setActive}
            className={this.state.class}
            to="/recipes"
          >
            Recipes
          </Link>
          <Link
            id="bookmarks"
            onClick={this.setActive}
            className={this.state.class}
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
