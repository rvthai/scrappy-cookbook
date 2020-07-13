import React, { Component } from "react";
import { Link } from "react-router-dom";
import "stylesheets/recipes/RecipeCard.css";

class RecipeCard extends Component {
  render() {
    const recipe = this.props.recipe;

    return (
      <Link
        className="recipe-card"
        to={{
          pathname: `/recipes/${recipe.uri.split("#")[1]}`,
          state: {
            recipe: recipe,
            from: this.props.from,
          },
        }}
      >
        <img className="recipe-card-image" src={recipe.image} alt="recipe" />
        <div className="recipe-card-description">
          <p className="recipe-card-label">{recipe.label}</p>
          <p className="recipe-card-source">{recipe.source}</p>
          <div className="recipe-card-stats">
            {recipe.calories.toFixed()}
            <span className="unit">Calories</span>
            <span className="vr"></span>
            {recipe.ingredientLines.length}
            <span className="unit">Ingredients</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default RecipeCard;
