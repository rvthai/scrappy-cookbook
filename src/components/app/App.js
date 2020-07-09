import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "stylesheets/app/App.css";

// Components
import Navbar from "components/app/Navbar";
import PageNotFound from "components/app/PageNotFound";
import Home from "components/home/Home";
import Recipes from "components/recipes/Recipes";
import RecipeDetails from "components/recipes/RecipeDetails";
import Bookmarks from "components/bookmarks/Bookmarks";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/recipes"
              render={(props) => <Recipes query="" recipes={null} {...props} />}
            />
            <Route exact path="/recipes/:id" component={RecipeDetails} />
            <Route exact path="/bookmarks" component={Bookmarks} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
