import React, { Component } from "react";
import { Link } from "react-router-dom";
import "stylesheets/recipes/recipe/RecipeCard.css";

class RecipeCard extends Component {
  render() {
    return (
      <Link className="card" to={`/recipes/${this.props.uri.split("#")[1]}`}>
        <img
          id="recipe-card-image"
          type="image"
          src={this.props.image}
          alt="recipe pic"
        />
        <div className="card-description">
          <p className="card-title">{this.props.label}</p>
          <p className="card-source">{this.props.source}</p>
          <div className="cal-desc">
            <p className="card-calories">
              {this.props.calories.toFixed()}
              <span className="cal-unit">Calories</span>
              <span className="vrule"></span>
              {this.props.numOfIngredients}
              <span className="cal-unit">Ingredients</span>
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default RecipeCard;
