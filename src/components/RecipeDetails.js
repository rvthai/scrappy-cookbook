import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RecipeDetails extends Component {
  handleClick = () => {
    this.props.history.push("/recipes");
  };

  render() {
    return (
      <div>
        <h1>Some details about the recipe will go here...</h1>
        <button onClick={this.handleClick}>Back</button>
      </div>
    );
  }
}

export default withRouter(RecipeDetails);
