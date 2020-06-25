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
      <div className="search-bar-container">
        <div className="search-bar-items">
          <FontAwesomeIcon className="search-bar-icon" icon={faSearch} />
          <form onSubmit={this.handleSubmit}>
            <input
              className="search-bar"
              type="text"
              value={this.props.query}
              onChange={this.handleChange}
              placeholder="chicken, kale, broccoli..."
            />
          </form>
        </div>
        {/* <div className="form">
          <form onSubmit={this.handleSubmit}>
            <FontAwesomeIcon
              className="search-icon"
              icon={faSearch}
              size="3x"
              light
            />
            <input
              type="text"
              className="search-bar"
              value={this.props.query}
              onChange={this.handleChange}
              placeholder="chicken, kale, broccoli..."
            />
          </form>
        </div> */}
      </div>
    );
  }
}

export default SearchBar;
