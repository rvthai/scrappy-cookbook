import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <br />
        <Link to="/recipes">
          <h1>Main Page - Click here to start searching for recipes</h1>
        </Link>
      </div>
    );
  }
}

export default withRouter(Home);
