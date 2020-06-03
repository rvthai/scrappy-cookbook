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
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/recipes"
              render={(props) => <Search query="" recipes={null} {...props} />}
            />
            <Route exact path="/recipe/:id" component={RecipeDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
