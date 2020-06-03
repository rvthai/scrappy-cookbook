import React, { Component } from "react";

import RecipeCard from "./RecipeCard";

class SearchResults extends Component {
  render() {
    return (
      <div className="container">
        {this.props.recipes.hits !== undefined
          ? this.props.recipes.hits
              .slice(this.props.from, this.props.to)
              .map((recipe, index) => (
                <RecipeCard
                  key={index}
                  uri={recipe.recipe.uri}
                  recipe={recipe.recipe}
                  label={recipe.recipe.label}
                  image={recipe.recipe.image}
                  calories={recipe.recipe.calories}
                />
              ))
          : "none"}
      </div>
    );
  }
}

export default SearchResults;
