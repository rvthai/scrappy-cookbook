import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/SearchBar.css";

// Icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// Actions
import { saveSearch } from "../actions";
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: "#e6e6e6",
    };
  }
  componentDidMount() {
    document.getElementById("bar").addEventListener("focus", this.inFocus);
    document.getElementById("bar").addEventListener("blur", this.outFocus);
  }

  componentWillUnmount() {
    document.getElementById("bar").removeEventListener("focus", this.inFocus);
    document.getElementById("bar").addEventListener("blur", this.outFocus);
  }

  inFocus = () => {
    this.setState({ style: "black" });
  };

  outFocus = () => {
    this.setState({ style: "#e6e6e6" });
  };

  handleSubmit = (event) => {
    this.props.onSearchSubmit(event);
  };

  handleChange = (event) => {
    this.props.onSearchChange(event.target.value);
  };

  render() {
    return (
      <div className="bbb">
        <FontAwesomeIcon
          id="icon"
          className="search-icon"
          style={{ color: `${this.state.style}` }}
          icon={faSearch}
          size="1x"
        />
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            id="bar"
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
