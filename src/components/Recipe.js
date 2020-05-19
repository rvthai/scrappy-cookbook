import React, { Component } from "react";
import "../stylesheets/Recipe.css";
import { withRouter, Link } from "react-router-dom";

class Recipe extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <Link to="/recipe">
          <input type="image" src={this.props.image} alt="no image" />
        </Link>
        <a href="https://www.youtube.com">random redirect to youtube</a>
        <p>{this.props.calories}</p>
      </div>
    );
  }
}

export default withRouter(Recipe);
