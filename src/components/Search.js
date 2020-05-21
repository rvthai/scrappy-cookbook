import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// actions
import { getRecipes, saveSearch, nextPage, prevPage } from "../actions";

// components
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class Search extends Component {
  handleBack = () => {
    console.log("Back button has been clicked");

    if (this.props.pagnition.from <= 0) {
      console.log("No pages to go back to.");
    } else {
      console.log("Go to previous page.");
      this.props.prevPage();
    }
  };

  handleNext = () => {
    console.log("Next button has been clicked.");
    if (this.props.pagnition.to < 100) {
      console.log("Go to next page.");
      this.props.nextPage();
    } else {
      console.log("No pages to go to.");
    }
  };
  handleSearchSubmit = (event) => {
    event.preventDefault();

    this.props.getRecipes(
      this.props.search.query,
      this.props.search.from,
      this.props.search.to
    );
  };

  handleSearchChange = (value) => {
    this.props.saveSearch(value);
  };

  render() {
    return (
      <div>
        <h1>Scrappy Cookbook</h1>
        <SearchBar
          query={this.props.search.query}
          onSearchChange={this.handleSearchChange}
          onSearchSubmit={this.handleSearchSubmit}
        />
        <button onClick={this.handleBack}>Back</button>
        <button onClick={this.handleNext}>Next</button>
        <SearchResults
          from={this.props.pagnition.from}
          to={this.props.pagnition.to}
          recipes={this.props.recipes}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  search: state.search,
  pagnition: state.pagnition,
});

const mapDispatchToProps = {
  getRecipes,
  saveSearch,
  nextPage,
  prevPage,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
