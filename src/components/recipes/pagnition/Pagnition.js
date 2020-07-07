import React, { Component } from "react";
// import "stylesheets/recipes/pagnition/Pagnition"

class Pagnition extends Component {
  render() {
    if (this.props.recipes.length > 20) {
      console.log("here 2");
      return <div>PAGNITION</div>;
    }

    return <div>NO PAGNITION</div>;
  }
}

export default Pagnition;
