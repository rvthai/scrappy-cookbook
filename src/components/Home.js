import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.css";

// Components

import HomeNavbar from "./HomeNavbar";

class Home extends Component {
  render() {
    return (
      <body className="home">
        <HomeNavbar />
        <div className="header-container">
          <p className="header">Cook scrappy, not crappy.</p>
        </div>
        <div className="description-container">
          <p className="description">
            Find the perfect recipe starting from the comfort of your very own
            fridge.
          </p>
          <Link id="recipes" to="/recipes"></Link>
        </div>
      </body>
    );
  }
}

export default Home;
