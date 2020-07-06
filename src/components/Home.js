import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Home.css";

// Components
import HomeNavbar from "./HomeNavbar";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <HomeNavbar />
        <div className="container">
          <div className="header">Cook scrappy, not crappy.</div>
          <div className="subheader">
            Find the perfect recipe starting from the comfort of your fridge.
          </div>
          <div className="button-container">
            <Link className="button" to="/recipes">
              EXPLORE RECIPES
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
