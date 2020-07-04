import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/RecipeCard.css";

// Components
import Bookmark from "./Bookmark";

class RecipeCard extends Component {
  render() {
    return (
      <div className="card-container">
        <h3>{this.props.label}</h3>
        <Link to={`/recipes/${this.props.uri.split("#")[1]}`}>
          <input
            id="recipe-card-image"
            type="image"
            src={this.props.image}
            alt="recipe pic"
          />
        </Link>
        <h4>By: {this.props.source}</h4>
        <p>Calories: {this.props.calories}</p>
        <Bookmark
          uri={this.props.uri}
          label={this.props.label}
          image={this.props.image}
          calories={this.props.calories}
          source={this.props.source}
        />
      </div>
    );
  }
}

export default RecipeCard;
