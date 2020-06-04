import React, { Component } from "react";
import { Link } from "react-router-dom";

class RecipeCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <Link to={`/recipes/${this.props.uri.split("#")[1]}`}>
          <input type="image" src={this.props.image} alt="recipe pic" />
        </Link>
        <h4>By: {this.props.source}</h4>
        <p>Calories: {this.props.calories}</p>
      </div>
    );
  }
}

export default RecipeCard;
