import React, { Component } from "react";
import "../stylesheets/SearchResults.css";

// Components
import RecipeCard from "./RecipeCard";
import Featured from "./Featured";

class SearchResults extends Component {
  render() {
    if (this.props.recipes === undefined) {
      return null;
    } else if (this.props.recipes.length <= 0) {
      return (
        <div>
          <p>No recipes found.</p>
          <Featured />
        </div>
      );
    }

    return (
      <div className="cards-container">
        {this.props.recipes
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
          ))}
      </div>
    );
  }
}

export default SearchResults;
