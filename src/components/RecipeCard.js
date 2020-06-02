import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class RecipeCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <h3>hi {this.props.id}</h3>
        <Link
          to={{
            pathname: "/recipe",
            state: {
              recipe: this.props.recipe,
            },
          }}
        >
          <input type="image" src={this.props.image} alt="no image" />
        </Link>
        <p>{this.props.calories}</p>
      </div>
    );
  }
}

export default withRouter(RecipeCard);
