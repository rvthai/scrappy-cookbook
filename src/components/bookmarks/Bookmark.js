import React, { Component } from "react";
import { connect } from "react-redux";
import "stylesheets/bookmarks/Bookmark.css";

// Actions
import { addBookmark, removeBookmark } from "actions";

class Bookmark extends Component {
  handleBookmark = (obj) => {
    this.props.addBookmark(obj);
  };

  handleUnbookmark = (obj) => {
    this.props.removeBookmark(obj);
  };

  containsObject = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].uri === obj.uri) {
        return true;
      }
    }

    return false;
  };

  render() {
    const obj = {
      uri: this.props.uri,
      label: this.props.label,
      image: this.props.image,
      calories: this.props.calories,
      source: this.props.source,
    };

    if (this.containsObject(obj, this.props.bookmarks)) {
      return (
        <div>
          <button
            className="bb"
            onClick={() => this.handleUnbookmark(obj)}
            type="button"
          >
            Bookmarked.
          </button>
        </div>
      );
    }
    return (
      <div>
        <button
          className="bb"
          onClick={() => this.handleBookmark(obj)}
          type="button"
        >
          Bookmark?
        </button>
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
