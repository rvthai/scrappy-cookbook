import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import RecipeCard from "./RecipeCard";

class Bookmarks extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = "none";
  }
  render() {
    console.log(this.props.bookmarks);
    return (
      <div>
        <h1>Bookmarks</h1>
        {this.props.bookmarks.map((recipe, index) => (
          <RecipeCard
            key={index}
            uri={recipe.uri}
            label={recipe.label}
            image={recipe.image}
            calories={recipe.calories}
            source={recipe.source}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
});

export default connect(mapStateToProps)(Bookmarks);
