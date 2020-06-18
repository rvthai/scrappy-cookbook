import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.css";

// Components

import HomeNavbar from "./HomeNavbar";

class Home extends Component {
  componentDidMount() {
    document.body.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(" +
      require("../assets/background.png") +
      ") no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
      <div className="home">
        <HomeNavbar />
        <div className="header-container">
          <p className="header">Cook scrappy, not crappy.</p>
        </div>
        <div className="description-container">
          <p className="description">
            Explore over 1.7 million different recipes in our Scrappy Cookbook
            and find the perfect recipe starting from the comfort of your very
            own fridge.
          </p>
          <Link id="recipes" to="/recipes">
            <div id="btn" className="button">
              SEARCH RECIPES
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
