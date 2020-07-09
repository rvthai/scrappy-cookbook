import React, { Component } from "react";
import { connect } from "react-redux";
import "stylesheets/bookmarks/Bookmarks.css";

// Components
import RecipeCard from "components/recipes/RecipeCard";

class Bookmarks extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = "none";
  }
  render() {
    return (
      <div>
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
