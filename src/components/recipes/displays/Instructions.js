import React, { Component } from "react";
import "stylesheets/recipes/displays/Instructions.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faHotdog,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";

class Featured extends Component {
  render() {
    return (
      <div className="con">
        <p className="title">HOW IT WORKS</p>
        <p className="descriptions">
          All it takes are a few simple steps to find the recipe you're looking
          for.
        </p>
        <div className="instructions">
          <div className="instructcard">
            <FontAwesomeIcon
              className="food-icon"
              icon={faHamburger}
              size="3x"
            />
            <p className="head-description">Search by ingredients</p>
            <p className="descriptions">
              Search a variety of recipe ideas by typing in ingredients into the
              search bar above.
            </p>
          </div>
          <div className="instructcard">
            <FontAwesomeIcon className="food-icon" icon={faHotdog} size="3x" />
            <p className="head-description">Filter recipes</p>
            <p className="descriptions">
              Apply filters to find recipes pertaining to any allergies or your
              current diet.
            </p>
          </div>

          <div className="instructcard">
            <FontAwesomeIcon
              className="food-icon"
              icon={faPizzaSlice}
              size="3x"
            />
            <p className="head-description">Bookmark recipes</p>
            <p className="descriptions">
              Save potential recipes for later as you continue looking for that
              perfect recipe.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
