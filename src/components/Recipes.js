import React, { Component } from "react";
import "../stylesheets/Recipes.css";

import Recipe from "./Recipe";

class Recipes extends Component {
  render() {
    return (
      <div className="container">
        {this.props.recipes !== undefined
          ? this.props.recipes.map((recipe, index) => (
              <Recipe
                key={index}
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

export default Recipes;
