import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.css";
import sho from "../assets/sho.png";

class Home extends Component {
  componentDidMount() {
    document.body.style.backgroundImage =
      "url(" + require("../assets/background.png") + ")";
  }
  render() {
    return (
      <div className="home">
        <div className="jumbotron">
          <div className="left">
            <p className="header">Cook scrappy not crappy.</p>
            <p className="description">
              Got some spinach thats about to go bad? Don't know what to do with
              the other half of that onion? Maybe you have some leftover chicken
              from last nights dinner. Whatever the case, Scrappy Cookbook
              offers over 1.7 million recipes you can explore. Find the perfect
              recipe starting from the scraps sitting in your very own fridge!
            </p>
            <Link to="/recipes">
              <div className="button">Search Recipes</div>
            </Link>
          </div>
          <div className="right">
            {/* <img src={sho} alt="shokugeki" width="715px" height="500px" /> */}
            <img src={sho} alt="shokugeki" width="100%" />
          </div>
        </div>
        <div className="details">
          <p>HOW IT WORKS</p>
          <div className="cards">
            <div className="card">feature 1</div>
            <div className="card">feature 2</div>
            <div className="card">feature 3</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
