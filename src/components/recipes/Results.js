import React, { Component } from "react";
import "stylesheets/recipes/Results.css";

// Components
import RecipeCard from "components/recipes/RecipeCard";

class Results extends Component {
  render() {
    console.log(this.props.loading);
    if (this.props.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    if (this.props.recipes.length <= 0) {
      return (
        <div>
          <p>No recipes found.</p>
        </div>
      );
    }

    return (
      <div>
        <div className="results">
          Search results for
          <span className="ingredients">"{this.props.query}"</span>{" "}
          <span className="count">({this.props.recipes.length} recipes)</span>
        </div>
        <div className="recipe-cards-container">
          {this.props.recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              uri={recipe.recipe.uri}
              label={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              source={recipe.recipe.source}
              ingredientCount={recipe.recipe.ingredientLines.length}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Results;
