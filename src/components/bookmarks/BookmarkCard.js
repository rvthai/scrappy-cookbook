import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "stylesheets/bookmarks/BookmarkCard.css";

// Actions
import { removeBookmark } from "actions";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class BookmarkCard extends Component {
  handleDeleteClick = () => {
    this.props.removeBookmark(this.props.recipe);
  };

  render() {
    const recipe = this.props.recipe;
    return (
      <div className="bookmark-card">
        <img className="bookmark-card-image" src={recipe.image} alt="recipe" />
        <p className="bookmark-card-label">{recipe.label}</p>
        <FontAwesomeIcon
          className="bookmark-card-delete-icon"
          icon={faTimes}
          onClick={this.handleDeleteClick}
        />
        <Link
          className="view-recipe-button"
          to={{
            pathname: `/recipes/${recipe.uri.split("#")[1]}`,
            state: {
              recipe: recipe,
              from: this.props.from,
            },
          }}
        >
          VIEW RECIPE
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = {
  removeBookmark,
};

export default connect(null, mapDispatchToProps)(BookmarkCard);
