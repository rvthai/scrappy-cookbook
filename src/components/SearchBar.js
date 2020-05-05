import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: "a",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Looking for recipies");
  };

  handleChange = (event) => {
    this.setState({ ingredients: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Search here..."
          />
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.state.ingredients}</h2>
      </div>
    );
  }
}

export default SearchBar;
