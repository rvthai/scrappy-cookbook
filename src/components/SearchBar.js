import React, { Component } from "react";
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
            value={this.props.query}
            onChange={this.handleChange}
            placeholder="chicken, kale..."
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
