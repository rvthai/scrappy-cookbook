import React, { Component } from "react";
import axios from "axios";

import Search from "./Search";
import Recipes from "./Recipes";

const APP_ID = "b2b48313";
const APP_KEY = "75c1ef2136cc93da129f58f3a4ebe8df";
const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      recipes: [],
    };
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();

    axios
      .get(url, {
        params: {
          q: this.state.query,
          from: 0,
          to: 10,
          // calories: (i.e. 500-1000)
          // health: (i.e. alcohol-free)
        },
      })
      .then((response) => {
        const recipes = response.data.hits;
        console.log(recipes);
        this.setState({ recipes });
      });
  };

  handleSearchChange = (value) => {
    this.setState({
      query: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Scrappy Cookbook</h1>
        <Search
          query={this.state.query}
          onSearchChange={this.handleSearchChange}
          onSearchSubmit={this.handleSearchSubmit}
        />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default Main;
