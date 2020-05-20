import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Main from "./Main";
import RecipeModal from "./RecipeModal";

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
              <Main query="" recipes={null} />
            </Route>
            <Route exact path="/recipe">
              <RecipeModal />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
