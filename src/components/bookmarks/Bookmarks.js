import React, { Component } from "react";
import { connect } from "react-redux";
import "stylesheets/bookmarks/Bookmarks.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

// Components
import RecipeCard from "components/recipes/RecipeCard";
import ScrollUp from "components/recipes/ScrollUp";

class Bookmarks extends Component {
  render() {
    return (
      <div className="bookmarks-container">
        <p className="bookmarks-heading">
          <FontAwesomeIcon icon={faBookmark} />
          Bookmarks{" "}
          <span className="bookmarks-count">
            ({this.props.bookmarks.length})
          </span>
        </p>
        <div className="recipe-cards-container">
          {this.props.bookmarks.map((recipe, index) => (
            <RecipeCard
              key={index}
              uri={recipe.uri}
              label={recipe.label}
              image={recipe.image}
              calories={recipe.calories}
              source={recipe.source}
              ingredientCount={recipe.ingredientCount}
            />
          ))}
        </div>
        <ScrollUp />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
});

export default connect(mapStateToProps)(Bookmarks);
