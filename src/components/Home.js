import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/recipes">
          <h1>Search for recipes </h1>
        </Link>
        <Link to="/bookmarks">
          <h1>Go to bookmarks</h1>
        </Link>
      </div>
    );
  }
}

export default withRouter(Home);
