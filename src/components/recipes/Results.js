import React, { Component } from "react";
import "stylesheets/recipes/Results.css";

// Components
import RecipeCard from "components/recipes/RecipeCard";
import ScrollUp from "components/recipes/ScrollUp";
import ResultsNotFound from "components/recipes/ResultsNotFound";

class Results extends Component {
  render() {
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
          <div className="results">
            Search results for{" "}
            <span className="ingredients">"{this.props.query}"</span>{" "}
            <span className="count">({this.props.recipes.length} recipes)</span>
          </div>
          <div className="results-notfound-message">
            <ResultsNotFound />
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="results">
          Search results for{" "}
          <span className="ingredients">"{this.props.query}"</span>{" "}
          <span className="count">({this.props.recipes.length} recipes)</span>
        </div>
        <div className="recipe-cards-container">
          {this.props.recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))}
        </div>
        <ScrollUp />
      </div>
    );
  }
}

export default Results;
