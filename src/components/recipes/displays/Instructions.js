import React, { Component } from "react";
import "stylesheets/recipes/displays/Instructions.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faHotdog,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";

class Instructions extends Component {
  render() {
    return (
      <div className="instructions-container">
        <p className="instructions-heading">HOW IT WORKS</p>
        <p className="secondary-description">
          All it takes are a few simple steps to find the recipe you're looking
          for.
        </p>
        <div className="instruction-cards">
          <div className="instruction-card">
            <FontAwesomeIcon
              className="instruction-icon"
              icon={faHamburger}
              size="3x"
            />
            <p className="primary-description">Search by ingredients</p>
            <p className="secondary-description">
              Search a variety of recipe ideas by typing in ingredients into the
              search bar above.
            </p>
          </div>
          <div className="instruction-card">
            <FontAwesomeIcon
              className="instruction-icon"
              icon={faHotdog}
              size="3x"
            />
            <p className="primary-description">Filter recipes</p>
            <p className="secondary-description">
              Apply filters to find recipes pertaining to any allergies or your
              current diet.
            </p>
          </div>

          <div className="instruction-card">
            <FontAwesomeIcon
              className="instruction-icon"
              icon={faPizzaSlice}
              size="3x"
            />
            <p className="primary-description">Bookmark recipes</p>
            <p className="secondary-description">
              Save potential recipes for later as you continue looking for that
              perfect recipe.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
