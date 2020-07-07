import React, { Component } from "react";
import { Link } from "react-router-dom";
import "stylesheets/home/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="heading-container">
          <div className="heading">Cook scrappy, not crappy.</div>
          <div className="subheading">
            Find the perfect recipe starting from the comfort of your fridge.
          </div>
          <div className="explore-button-wrapper">
            <Link className="explore-button" to="/recipes">
              EXPLORE RECIPES
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
