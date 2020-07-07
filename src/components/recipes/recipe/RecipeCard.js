import React, { Component } from "react";
import { Link } from "react-router-dom";
import "stylesheets/recipes/recipe/RecipeCard.css";

class RecipeCard extends Component {
  render() {
    return (
      <Link
        className="recipe-card"
        to={`/recipes/${this.props.uri.split("#")[1]}`}
      >
        <img
          className="recipe-card-image"
          src={this.props.image}
          alt="recipe"
        />
        <div className="recipe-card-description">
          <p className="recipe-card-title">{this.props.label}</p>
          <p className="recipe-card-source">{this.props.source}</p>
          <div className="recipe-card-stats">
            <p className="card-calories">
              {this.props.calories.toFixed()}
              <span className="unit">Calories</span>
              <span className="vr"></span>
              {this.props.ingredientCount}
              <span className="unit">Ingredients</span>
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default RecipeCard;
