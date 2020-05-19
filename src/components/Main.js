import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// actions
import { getRecipes, saveSearch } from "../actions";

// components
import Search from "./Search";
import Recipes from "./Recipes";

class Main extends Component {
  handleSearchSubmit = (event) => {
    event.preventDefault();

    this.props.getRecipes(this.props.search.query);

    //console.log(this.props.search.query);
  };

  handleSearchChange = (value) => {
    this.props.saveSearch(value);
  };

  render() {
    return (
      <div>
        <h1>Scrappy Cookbook</h1>
        <Search
          query={this.props.search.query}
          onSearchChange={this.handleSearchChange}
          onSearchSubmit={this.handleSearchSubmit}
        />
        <Recipes recipes={this.props.recipes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  search: state.search,
});

const mapDispatchToProps = {
  getRecipes,
  saveSearch,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
