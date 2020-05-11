import React, { Component } from "react";
import "../stylesheets/Recipes.css";

class Recipes extends Component {
  render() {
    return (
      <div className="container">
        {this.props.recipes.map((recipe, index) => (
          <h3 key={index}>{recipe.recipe.label}</h3> // Going to be the Recipe component
        ))}
      </div>
    );
  }
}

export default Recipes;
