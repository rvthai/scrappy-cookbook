import React, { Component } from "react";
import "../stylesheets/Featured.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faHotdog,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";

//faBookmark
//faHamburger
//faPizzaSlice
//faIceCream
//faHotDog
//faCarrot

class Featured extends Component {
  render() {
    return (
      <div className="con">
        <p className="title">HOW IT WORKS</p>
        <p className="descriptions">
          It only takes a few simple steps to find the recipe you're looking
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
              It only takes a few simple steps to find the recipe you're looking
              for.
            </p>
          </div>
          <div className="instructcard">
            <FontAwesomeIcon className="food-icon" icon={faHotdog} size="3x" />
            <p className="head-description">Search by ingredients</p>
            <p className="descriptions">
              It only takes a few simple steps to find the recipe you're looking
              for.
            </p>
          </div>

          <div className="instructcard">
            <FontAwesomeIcon
              className="food-icon"
              icon={faPizzaSlice}
              size="3x"
            />
            <p className="head-description">Search by ingredients</p>
            <p className="descriptions">
              It only takes a few simple steps to find the recipe you're looking
              for.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
