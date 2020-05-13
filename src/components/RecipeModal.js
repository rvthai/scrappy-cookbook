import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class RecipeModal extends Component {
  handleClick = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        some recipe details here...
        <button onClick={this.handleClick}>Back</button>
      </div>
    );
  }
}

export default withRouter(RecipeModal);
