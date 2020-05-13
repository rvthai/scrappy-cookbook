import React, { Component } from "react";
import "../stylesheets/Recipe.css";
import { Link } from "react-router-dom";

class Recipe extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <Link to="/details">
          <input type="image" src={this.props.image} alt="no image" />
        </Link>
        <p>{this.props.calories}</p>
      </div>
    );
  }
}

export default Recipe;
