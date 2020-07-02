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

  render() {
    return (
      <div>
        <p>DIET</p>
        <form onChange={this.handleDiet}>
          <label className="radio-container">
            All
            <input
              className="circle"
              type="radio"
              name="diet"
              id="all"
              value="all"
            />
            <span className="checkmark"></span>
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
            <span className="checkmark"></span>
          </div> */}
          {/* <label class="radio-container">
            All
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="radio-container">
            Balanced
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="radio-container">
            Low-carb
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="radio-container">
            Low-fat
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="radio-container">
            High-carb
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label> */}
        </form>
      </div>
    );
  }
}

export default DietFilters;
