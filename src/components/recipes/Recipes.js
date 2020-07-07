import React, { Component } from "react";
import { connect } from "react-redux";
import "stylesheets/recipes/Recipes.css";

// Actions
import {
  getRecipes,
  saveSearch,
  saveFilters,
  nextPage,
  prevPage,
} from "actions";

// Components
import SearchBar from "components/recipes/search/SearchBar";
import Filters from "components/recipes/search/filters/Filters";
import Instructions from "components/recipes/displays/Instructions";
import Results from "components/recipes/displays/Results";
import Pagnition from "components/recipes/pagnition/Pagnition";

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInstructions: null,
    };
  }

  componentDidMount() {
    if (this.props.recipes === null) {
      this.setState({ showInstructions: true });
    } else {
      this.setState({ showInstructions: false });
    }
  }

  handleSearchChange = (value) => {
    this.props.saveSearch(value);
  };

  handleFiltersChange = (id, value) => {
    var newObj = { ...this.props.filters };
    newObj[id] = value;
    this.props.saveFilters(newObj);
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.getRecipes(this.props.query, this.props.filters);
    this.setState({ showInstructions: false });
  };

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

  render() {
    return (
      <div>
        <div id="overlay" className="overlay" />
        <div className="search-container">
          <div className="search-bar-container">
            <SearchBar
              query={this.props.query}
              onSearchChange={this.handleSearchChange}
              onSearchSubmit={this.handleSearchSubmit}
            />
            <div className="vr" />
            <Filters
              filters={this.props.filters}
              onFiltersChange={this.handleFiltersChange}
              onFiltersApply={this.handleSearchSubmit}
            />
          </div>
        </div>
        <div className="results-container">
          {this.state.showInstructions ? (
            <Instructions />
          ) : (
            <Results
              from={this.props.pagnition.from}
              to={this.props.pagnition.to}
              recipes={
                this.props.recipes !== null ? this.props.recipes.hits : []
              }
            />
          )}
        </div>
        <div className="pagnition-container">
          {this.props.recipes !== null ? (
            <Pagnition recipes={this.props.recipes.hits} />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
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
