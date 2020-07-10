import React, { Component } from "react";
import "stylesheets/recipes/ResultsNotFound.css";

class ResultsNotFound extends Component {
  render() {
    return (
      <div>
        <p className="primary-message">
          No recipes found{" "}
          <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>):</span>
        </p>
        <p className="secondary-message">
          Try changing up the ingredients, and of course, always double check
          the spelling!
        </p>
      </div>
    );
  }
}

export default ResultsNotFound;
