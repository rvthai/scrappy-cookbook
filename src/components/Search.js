import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

// Actions
import {
  getRecipes,
  saveSearch,
  saveFilters,
  nextPage,
  prevPage,
} from "../actions";

// Components
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SearchFilters from "./SearchFilters";
import HomeNavbar from "./HomeNavbar";

class Search extends Component {
  handleBack = () => {
    if (this.props.pagnition.from > 0) {
      this.props.prevPage();
    }
  };

  handleNext = () => {
    if (this.props.pagnition.to < 100) {
      this.props.nextPage();
    }
  };
  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.getRecipes(this.props.query, this.props.filters);
  };

  handleSearchChange = (value) => {
    this.props.saveSearch(value);
  };

  handleFiltersChange = (id, value) => {
    var newObj = { ...this.props.filters };
    newObj[id] = value;
    this.props.saveFilters(newObj);
  };

  render() {
    return (
      <div>
        <HomeNavbar />
        <Link to="/bookmarks">
          {" "}
          {/* need a link in order to continue state, cant just route through url*/}
          <button>bookmarks</button>
        </Link>
        <SearchBar
          query={this.props.query}
          onSearchChange={this.handleSearchChange}
          onSearchSubmit={this.handleSearchSubmit}
        />
        <SearchFilters
          filters={this.props.filters}
          onFiltersChange={this.handleFiltersChange}
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
  recipes: state.recipes.hits,
  query: state.search.query,
  filters: state.search.filters,
  pagnition: state.pagnition,
});

const mapDispatchToProps = {
  getRecipes,
  saveSearch,
  saveFilters,
  nextPage,
  prevPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
