import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <br />
        <Link to="/recipes">
          <h1>Main Page - Click here to start searching for recipes</h1>
        </Link>
      </div>
    );
  }
}

export default Home;
