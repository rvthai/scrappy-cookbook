import React, { Component } from "react";
import { connect } from "react-redux";
import "stylesheets/bookmarks/Bookmark.css";

// Actions
import { addBookmark, removeBookmark } from "actions";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";

library.add(farBookmark);
library.add(fasBookmark);

class Bookmark extends Component {
  handleBookmark = () => {
    this.props.addBookmark(this.props.recipe);
    document.getElementById("bookmark").classList.add("bookmarked");
  };

  handleUnbookmark = () => {
    this.props.removeBookmark(this.props.recipe);
    document.getElementById("bookmark").classList.remove("bookmarked");
  };

  containsRecipe = () => {
    const recipe = this.props.recipe;
    const bookmarks = this.props.bookmarks;

    for (var i = 0; i < bookmarks.length; i++) {
      if (bookmarks[i].uri === recipe.uri) {
        return true;
      }
    }

    return false;
  };

  render() {
    if (this.containsRecipe()) {
      return (
        <div
          id="bookmark"
          className="bookmark-button"
          onClick={this.handleUnbookmark}
        >
          <FontAwesomeIcon
            className="bookmark-icon"
            icon={["fas", "bookmark"]}
          />
          Bookmarked
        </div>
      );
    }
    return (
      <div
        id="bookmark"
        className="bookmark-button"
        onClick={this.handleBookmark}
      >
        <FontAwesomeIcon className="bookmark-icon" icon={["far", "bookmark"]} />
        Bookmark
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
});

const mapDispatchToProps = {
  addBookmark,
  removeBookmark,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
