import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import SearchBar from "./components/SearchBar";

const APP_ID = "b2b48313";
const APP_KEY = "75c1ef2136cc93da129f58f3a4ebe8df";
const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount = () => {
  //   axios.get(url).then((response) => {
  //     console.log(response);
  //   });
  // };

  render() {
    return (
      <div className="App">
        <h1>Scrappy Cookbook</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
