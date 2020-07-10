import React, { Component } from "react";
import { connect } from "react-redux";
import "stylesheets/bookmarks/Bookmark.css";

// Actions
import { addBookmark, removeBookmark } from "actions";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

library.add(faBookmark);

class Bookmark extends Component {
  handleBookmark = () => {
    this.props.addBookmark(this.props.recipe);
  };

  handleUnbookmark = () => {
    this.props.removeBookmark(this.props.recipe);
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
        <div>
          <FontAwesomeIcon
            icon={["fas", "bookmark"]}
            onClick={this.handleUnbookmark}
          />
          <button onClick={this.handleUnbookmark}>Bookmarked.</button>
        </div>
      );
    }
    return (
      <div>
        <FontAwesomeIcon
          icon={["far", "bookmark"]}
          onClick={this.handleBookmark}
        />
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
