import React, { Component } from "react";
import { connect } from "react-redux";
import "stylesheets/recipes/Recipes.css";

// Actions
import { getRecipes, saveSearch, saveFilters } from "actions";

// Components
import SearchBar from "components/recipes/SearchBar";
import Filters from "components/recipes/filters/Filters";
import Instructions from "components/recipes/Instructions";
import Results from "components/recipes/Results";

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInstructions: null,
      finalQuery: "",
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
    this.setState({ showInstructions: false, finalQuery: this.props.query });
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
              recipes={
                this.props.recipes !== null ? this.props.recipes.hits : []
              }
              loading={this.props.loading}
              query={this.state.finalQuery}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.data,
  loading: state.recipes.loading,
  query: state.search.query,
  filters: state.search.filters,
});

const mapDispatchToProps = {
  getRecipes,
  saveSearch,
  saveFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
