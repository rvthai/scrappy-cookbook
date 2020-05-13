import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./Main";
import RecipeModal from "./RecipeModal";

const APP_ID = "b2b48313";
const APP_KEY = "75c1ef2136cc93da129f58f3a4ebe8df";
const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/details" component={RecipeModal} />
      </Router>
    );
  }
}

export default App;
