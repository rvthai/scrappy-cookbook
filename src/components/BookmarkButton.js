import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { addBookmark, removeBookmark } from "../actions";

// NEED TO CONNECT TO REDUX
// MATCH STATE TO PROPS
// DISPATCH ADDING RECIPE (may need to pass a recipe id to prop)
// FOR HANDLECLICK, NEED TO CHECK THE REDUX STATE TO SEE IF ITS IN THE LIST
// IF YES, REMOVE IT FROM THE LIST AND RETURN SOMETHING TO ADJUST CSS ON RECIPECARD
// IF NO, MEANS IT IS CLICKED AGAIN WHEN IT WAS BOOKMARKED BEFORE, REMOVE FROM LIST
// AND CHANGE THE LOOK/COLOR/UNFILL THE BUTTON HERE OR IN RECIPE CARD, KEEPING IT HERE MAY BE BETTER
// SINCE ITS ITS OWN COMPONENT

class BookmarkButton extends Component {
  handleClick = () => {
    for (var i = 0; i < this.props.bookmarks.length; i++) {
      if (this.props.bookmarks[i].uri === this.props.uri) {
        if (i > -1) {
          this.props.bookmarks.splice(i, 1);
          // fill button
          return
        }
      } 
    }

    this.props.bookmarks.push({
      uri: this.props.uri,
      label: this.prop.label,
      image: this.props.image,
      calories: this.props.calories,
      source: this.props.source,
      bookmarked={recipe.bookmarked},
    })
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick} type="button">
          Bookmark!
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

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
