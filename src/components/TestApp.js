import React, { Component } from "react";
import { connect } from "react-redux";

// import the actions
import { getRecipes } from "../actions/";

class TestApp extends Component {
  render() {
    return (
      <div>
        Testin
        <button onClick={this.props.getRecipes}>
          click to search for chicken recipes
        </button>
        {this.props.recipes.hits !== undefined
          ? this.props.recipes.hits.map((recipe, index) => (
              <h1 key={index}>{recipe.recipe.label}</h1>
            ))
          : "none"}
      </div>
    );
  }
}

// map redux store to your props
const mapStateToProps = (state) => ({
  recipes: state,
});

// can pass in parameters if needed
const mapDispatchToProps = {
  getRecipes: getRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestApp);
