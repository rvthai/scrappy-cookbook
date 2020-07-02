import React, { Component } from "react";
import "../stylesheets/DietFilters.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

class DietFilters extends Component {
  //   handleChange = (event) => {
  //     this.props.onChange(
  //       event.target.name,
  //       event.target.value,
  //       event.target.checked
  //     );
  //   };

  handleChange = (event) => {
    var oldtab = document.getElementsByClassName("active-btn");
    if (oldtab.length > 0) {
      oldtab[0].classList.remove("active-btn");
    }

    var tab = document.getElementById(event.target.value);
    tab.classList.add("active-btn");
  };

  render() {
    return (
      <div>
        <p>DIET</p>
        <form className="container-radio" onChange={this.handleChange}>
          <label id="all" className="radio-container">
            All
            <input className="circle" type="radio" name="diet" value="all" />
            <div className="checkmark">
              <div className="mini"></div>
            </div>
          </label>
          <label id="balanced" className="radio-container">
            Balanced
            <input
              className="circle"
              type="radio"
              name="diet"
              value="balanced"
            />
            <div className="checkmark">
              <div className="mini"></div>
            </div>
          </label>
          <label id="low-carb" className="radio-container">
            Low-carb
            <input
              className="circle"
              type="radio"
              name="diet"
              value="low-carb"
            />
            <div className="checkmark">
              <div className="mini"></div>
            </div>
          </label>
          <label id="low-fat" className="radio-container">
            Low-fat
            <input
              className="circle"
              type="radio"
              name="diet"
              value="low-fat"
            />
            <div className="checkmark">
              <div className="mini"></div>
            </div>
          </label>
          <label id="high-protein" className="radio-container">
            High-protein
            <input
              className="circle"
              type="radio"
              name="diet"
              value="high-protein"
            />
            <div className="checkmark">
              <div className="mini"></div>
            </div>
          </label>
          {/* <div className="radio-container">
            <input
              className="circle"
              type="radio"
              name="diet"
              id="all"
              value="all"
            />
            <label for="all">All</label>
            <div className="checkmark"></div>
          </div> */}
          {/* <label class="radio-container">
            All
            <input type="radio" checked="checked" name="radio" />
            <div class="checkmark"></div>
          </label>
          <label class="radio-container">
            Balanced
            <input type="radio" checked="checked" name="radio" />
            <div class="checkmark"></div>
          </label>
          <label class="radio-container">
            Low-carb
            <input type="radio" checked="checked" name="radio" />
            <div class="checkmark"></div>
          </label>
          <label class="radio-container">
            Low-fat
            <input type="radio" checked="checked" name="radio" />
            <div class="checkmark"></div>
          </label>
          <label class="radio-container">
            High-carb
            <input type="radio" checked="checked" name="radio" />
            <div class="checkmark"></div>
          </label> */}
        </form>
      </div>
    );
  }
}

export default DietFilters;
