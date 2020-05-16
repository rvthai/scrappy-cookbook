import React, { Component } from "react";

import { connect } from "react-redux";
import { getRecipes } from "../actions";

import Search from "./Search";
import Recipes from "./Recipes";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();

    this.props.getRecipes();
  };

  handleSearchChange = (value) => {
    this.setState({
      query: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Scrappy Cookbook</h1>
        <Search
          query={this.state.query}
          onSearchChange={this.handleSearchChange}
          onSearchSubmit={this.handleSearchSubmit}
        />
        <Recipes recipes={this.props.recipes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state,
});

const mapDispatchToProps = {
  getRecipes: getRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
