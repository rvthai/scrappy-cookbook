import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ ingredients: this.event.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search here..." />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
