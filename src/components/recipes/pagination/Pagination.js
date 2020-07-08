import React, { Component } from "react";
import "stylesheets/recipes/pagination/Pagination.css";

class Pagination extends Component {
  render() {
    if (this.props.recipes.length <= 20) {
      return <div> no pagination</div>;
    }

    return (
      <div className="pagnition-bar">
        <button>First</button>
        <button>Prev</button>
        <p> 1 2 3 4 </p>
        <button>Next</button>
        <button>Last</button>
      </div>
    );
  }
}

export default Pagination;
