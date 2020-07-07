import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "stylesheets/recipes/search/SearchBar.css";

// Icons
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

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

    this.styleCross(this.props.query);
  }

  componentWillUnmount() {
    document.getElementById("bar").removeEventListener("focus", this.inFocus);
    document.getElementById("bar").addEventListener("blur", this.outFocus);
  }

  inFocus = () => {
    // document.body.classList.add("back");
    var over = document.getElementById("overlay");
    // var i = document.getElementById("Card");
    // i.style.zIndex = -1;
    // over.style.display = "block";
    over.style.opacity = 1;
    over.style.zIndex = 10;
    this.setState({ style: "black" });
  };

  outFocus = () => {
    this.styleCross(document.getElementById("bar").value);
    // document.body.classList.remove("back");
    var over = document.getElementById("overlay");
    // over.style.display = "none";
    // var i = document.getElementById("Card");
    // i.style.zIndex = 1;
    over.style.opacity = 0;
    over.style.zIndex = -1;
    this.setState({ style: "#e6e6e6" });
  };

  styleCross = (s) => {
    if (s !== "") {
      document.getElementById("clear-icon").style.display = "inline-block";
    } else {
      document.getElementById("clear-icon").style.display = "none";
    }
  };

  handleSubmit = (event) => {
    // document.body.classList.remove("back");
    var over = document.getElementById("overlay");
    // over.style.display = "none";
    over.style.opacity = 0;
    over.style.zIndex = -1;
    // i.style.zIndex = 1;
    document.getElementById("bar").blur();
    this.props.onSearchSubmit(event);
  };

  handleChange = (event) => {
    this.styleCross(event.target.value);
    this.props.onSearchChange(event.target.value);
  };

  handleClear = () => {
    document.getElementById("bar").focus();
    this.styleCross("");
    this.props.onSearchChange("");
  };

  render() {
    return (
      <div className="search-bar-wrapper">
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
            autoComplete="off"
            placeholder="chicken, kale, broccoli..."
          />
        </form>
        <FontAwesomeIcon
          onClick={this.handleClear}
          id="clear-icon"
          style={{ color: `${this.state.style}` }}
          className="clear-icon"
          icon={faTimes}
          size="1x"
        />
      </div>
    );
  }
}

export default SearchBar;