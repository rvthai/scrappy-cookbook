import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "stylesheets/recipes/search/SearchBar.css";

// Icons
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconColor: "#e6e6e6",
    };
  }

  componentDidMount() {
    document
      .getElementById("search-bar")
      .addEventListener("focus", this.searchBarInFocus);
    document
      .getElementById("search-bar")
      .addEventListener("blur", this.searchBarOutOfFocus);

    this.styleCrossIcon(this.props.query);
  }

  componentWillUnmount() {
    document
      .getElementById("search-bar")
      .removeEventListener("focus", this.searchBarInFocus);
    document
      .getElementById("search-bar")
      .addEventListener("blur", this.searchBarOutOfFocus);
  }

  searchBarInFocus = () => {
    var overlay = document.getElementById("overlay");
    overlay.style.opacity = 1;
    overlay.style.zIndex = 10;

    this.setState({ iconColor: "#000000" });
  };

  searchBarOutOfFocus = () => {
    this.styleCrossIcon(document.getElementById("search-bar").value);

    var overlay = document.getElementById("overlay");
    overlay.style.opacity = 0;
    overlay.style.zIndex = -1;

    this.setState({ iconColor: "#e6e6e6" });
  };

  styleCrossIcon = (query) => {
    if (query !== "") {
      document.getElementById("clear-icon").style.display = "inline-block";
    } else {
      document.getElementById("clear-icon").style.display = "none";
    }
  };

  handleChange = (event) => {
    this.styleCrossIcon(event.target.value);
    this.props.onSearchChange(event.target.value);
  };

  handleClear = () => {
    document.getElementById("search-bar").focus();
    this.styleCrossIcon("");
    this.props.onSearchChange("");
  };

  handleSubmit = (event) => {
    var overlay = document.getElementById("overlay");
    overlay.style.opacity = 0;
    overlay.style.zIndex = -1;
    document.getElementById("search-bar").blur();

    this.props.onSearchSubmit(event);
  };

  render() {
    return (
      <div className="search-bar-wrapper">
        <FontAwesomeIcon
          id="search-icon"
          className="search-icon"
          style={{ color: `${this.state.iconColor}` }}
          icon={faSearch}
          size="1x"
        />
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            id="search-bar"
            className="search-bar"
            type="text"
            value={this.props.query}
            onChange={this.handleChange}
            placeholder="chicken, kale, broccoli..."
            autoComplete="off"
          />
        </form>
        <FontAwesomeIcon
          id="clear-icon"
          className="clear-icon"
          style={{ color: `${this.state.iconColor}` }}
          onClick={this.handleClear}
          icon={faTimes}
          size="1x"
        />
      </div>
    );
  }
}

export default SearchBar;
