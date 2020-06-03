import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// actions
import {
  getRecipes,
  saveSearch,
  saveFilters,
  nextPage,
  prevPage,
} from "../actions";

// components
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SearchFilters from "./SearchFilters";

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

    this.props.getRecipes(this.props.search.query, this.props.search.filters);
  };

  handleSearchChange = (value) => {
    this.props.saveSearch(value);
  };

  handleFilterChange = (id, value) => {
    console.log(id);
    console.log(value);
    console.log(this.props.search.filters);
    var newObj = { ...this.props.search.filters };
    newObj[id] = value;
    console.log(newObj);
    this.props.saveFilters(newObj);
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
        <SearchFilters
          tempFilters={this.props.search.filters}
          onFilterChange={this.handleFilterChange}
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
  saveFilters,
  nextPage,
  prevPage,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
