import React, { Component } from "react";
import "stylesheets/bookmarks/BookmarksNotFound.css";

class BookmarksNotFound extends Component {
  render() {
    return (
      <div>
        <p className="primary-message">You currently have no bookmarks.</p>
        <p className="secondary-message">
          Head over to the <span style={{ fontWeight: "bold" }}>Recipes</span>{" "}
          page and start seraching for cool new recipes to bookmark!
        </p>
      </div>
    );
  }
}

export default BookmarksNotFound;
