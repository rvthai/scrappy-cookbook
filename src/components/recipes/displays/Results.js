import React, { Component } from "react";
import "stylesheets/recipes/displays/Results.css";

// Components
import RecipeCard from "components/recipes/recipe/RecipeCard";

class Results extends Component {
  render() {
    if (this.props.recipes.length <= 0) {
      return (
        <div>
          <p>No recipes found.</p>
        </div>
      );
    }

    return (
      <div className="cards-container">
        {this.props.recipes
          // .slice(this.props.from, this.props.to)
          .slice(0, 20)
          .map((recipe, index) => (
            <RecipeCard
              key={index}
              uri={recipe.recipe.uri}
              label={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              source={recipe.recipe.source}
              numOfIngredients={recipe.recipe.ingredientLines.length}
            />
          ))}
      </div>
    );
  }
}

export default Results;