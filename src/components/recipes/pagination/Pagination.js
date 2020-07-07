import React, { Component } from "react";
import "stylesheets/recipes/pagination/Pagination.css";

class Pagination extends Component {
  render() {
    if (this.props.recipes.length > 20) {
      console.log("here 2");
      return <div>pagination</div>;
    }

    return <div>NO pagination</div>;
  }
}

export default Pagination;
