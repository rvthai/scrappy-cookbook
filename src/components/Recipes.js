import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../stylesheets/Recipes.css";

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
import Navbar from "./Navbar";
import Featured from "./Featured";

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intro: true, //problematic when going back
    };
  }

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
    this.setState({ intro: false });
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
        <Navbar />
        <div id="overlay" className="overlay" />
        <div className="search-container">
          <div className="aaa">
            <SearchBar
              query={this.props.query}
              onSearchChange={this.handleSearchChange}
              onSearchSubmit={this.handleSearchSubmit}
            />
            <div className="vr"></div>
            <SearchFilters
              filters={this.props.filters}
              onFiltersChange={this.handleFiltersChange}
              onFiltersApply={this.handleSearchSubmit}
            />
          </div>
        </div>
        <div className="results-container">
          {this.state.intro ? (
            <Featured />
          ) : (
            <SearchResults
              from={this.props.pagnition.from}
              to={this.props.pagnition.to}
              recipes={this.props.recipes}
            />
          )}
          {/* <button onClick={this.handleBack}>Back</button>
          <button onClick={this.handleNext}>Next</button> */}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
