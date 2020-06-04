import React, { Component } from "react";

// Components
import RecipeCard from "./RecipeCard";

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.recipes !== undefined ? (
          this.props.recipes
            .slice(this.props.from, this.props.to)
            .map((recipe, index) => (
              <RecipeCard
                key={index}
                uri={recipe.recipe.uri}
                label={recipe.recipe.label}
                image={recipe.recipe.image}
                calories={recipe.recipe.calories}
                source={recipe.recipe.source}
              />
            ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    );
  }
}

export default SearchResults;
