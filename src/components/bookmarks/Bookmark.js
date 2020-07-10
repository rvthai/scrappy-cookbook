import React, { Component } from "react";
import { connect } from "react-redux";
import "stylesheets/bookmarks/Bookmark.css";

// Actions
import { addBookmark, removeBookmark } from "actions";

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
          <button onClick={this.handleUnbookmark}>Bookmarked.</button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.handleBookmark}>Bookmark?</button>
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
