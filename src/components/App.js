import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";
import RecipeDetails from "./RecipeDetails";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/recipes">
              <Search query="" recipes={null} />
            </Route>
            <Route exact path="/recipe">
              <RecipeDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
