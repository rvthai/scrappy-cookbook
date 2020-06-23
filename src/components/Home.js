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
        <div className="container">
          <p className="header">Cook scrappy, not crappy.</p>
          <p className="subheader">
            Find the perfect recipe starting from the comfort of your very own
            fridge.
          </p>
          <Link className="button" to="/recipes">
            EXPLORE RECIPES
          </Link>
        </div>
      </body>
    );
  }
}

export default Home;
