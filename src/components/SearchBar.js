import React, { Component } from "react";
import "../stylesheets/SearchBar.css";
// Actions
import { saveSearch } from "../actions";
class SearchBar extends Component {
  handleSubmit = (event) => {
    this.props.onSearchSubmit(event);
  };

  handleChange = (event) => {
    this.props.onSearchChange(event.target.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search-bar"
            value={this.props.query}
            onChange={this.handleChange}
            placeholder="Search recipes"
          />
          <input className="search-btn" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
