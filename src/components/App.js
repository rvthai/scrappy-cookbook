import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../stylesheets/App.css";

// Components
import Home from "./Home";
import Recipes from "./Recipes";
import RecipeDetails from "./RecipeDetails";
import Bookmarks from "./Bookmarks";
import GenericNotFound from "./GenericNotFound";

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
              render={(props) => <Recipes query="" recipes={null} {...props} />}
            />
            <Route exact path="/recipes/:id" component={RecipeDetails} />
            <Route exact path="/bookmarks" component={Bookmarks} />
            {/* <Route path="*" component={GenericNotFound} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
