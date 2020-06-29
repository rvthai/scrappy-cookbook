import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/SearchBar.css";

// Icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
      <div className="bbb">
        <FontAwesomeIcon className="search-icon" icon={faSearch} size="2x" />
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="search-bar"
            type="text"
            value={this.props.query}
            onChange={this.handleChange}
            placeholder="chicken, kale, broccoli..."
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
