import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "stylesheets/home/Home.css";

// Actions
import { resetRecipes, resetSearch } from "actions";

class Home extends Component {
  componentDidMount() {
    this.props.resetRecipes();
    this.props.resetSearch();
  }

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

const mapDispatchToProps = {
  resetRecipes,
  resetSearch,
};

export default connect(null, mapDispatchToProps)(Home);
