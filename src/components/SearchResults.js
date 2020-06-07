import React, { Component } from "react";

// Components
import RecipeCard from "./RecipeCard";

class SearchResults extends Component {
  render() {
    if (this.props.recipes === undefined) {
      return null;
    } else if (this.props.recipes.length <= 0) {
      return <p>No recipes found.</p>;
    }

    return (
      <div>
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
              bookmarked={recipe.bookmarked}
            />
          ))}
      </div>
    );
  }
}

export default SearchResults;
