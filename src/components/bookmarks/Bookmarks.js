import React, { Component } from "react";
import { connect } from "react-redux";
import "stylesheets/bookmarks/Bookmarks.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

// Components
import BookmarkCard from "components/bookmarks/BookmarkCard";
import ScrollUp from "components/recipes/ScrollUp";
import BookmarksNotFound from "components/bookmarks/BookmarksNotFound";

class Bookmarks extends Component {
  render() {
    if (this.props.bookmarks.length <= 0) {
      return (
        <div className="bookmarks-container">
          <p className="bookmarks-heading">
            <FontAwesomeIcon className="bookmark-icon" icon={faBookmark} />
            Bookmarks{" "}
            <span className="bookmarks-count">
              ({this.props.bookmarks.length})
            </span>
          </p>
          <div className="bookmarks-notfound-message">
            <BookmarksNotFound />
          </div>
        </div>
      );
    }

    return (
      <div className="bookmarks-container">
        <p className="bookmarks-heading">
          <FontAwesomeIcon className="bookmark-icon" icon={faBookmark} />
          Bookmarks{" "}
          <span className="bookmarks-count">
            ({this.props.bookmarks.length})
          </span>
        </p>
        <div className="bookmark-cards-container">
          {this.props.bookmarks.map((recipe, index) => (
            <BookmarkCard key={index} recipe={recipe} from="Bookmarks" />
          ))}
          <div className="phantom-card"></div>
          <div className="phantom-card"></div>
          <div className="phantom-card"></div>
        </div>
        <ScrollUp />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
});

export default connect(mapStateToProps, null)(Bookmarks);
