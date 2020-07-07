import React, { Component } from "react";
import "stylesheets/recipes/search/filters/DietFilters.css";

class DietFilters extends Component {
  componentDidMount() {
    const diet_filter = this.props.filters.diet;

    var label = document.getElementById(diet_filter);

    if (label !== null) {
      label.classList.add("active-diet-label");
      label.children[0].checked = true;
    }
  }

  handleChange = (event) => {
    var labels = document.getElementsByClassName("active-diet-label");

    if (labels.length > 0) {
      var prev_label = labels[0];
      prev_label.classList.remove("active-diet-label");
    }

    var label = document.getElementById(event.target.value);
    label.classList.add("active-diet-label");

    this.props.onChange(event.target.name, event.target.value);
  };

  handleClear = () => {
    var labels = document.getElementsByClassName("active-diet-label");
    if (labels.length > 0) {
      var prev_label = labels[0];
      prev_label.children[0].checked = false;
      prev_label.classList.remove("active-diet-label");
    }
  };

  render() {
    return (
      <div>
        <div className="diet-heading">
          <p>DIET</p>
          <p className="clear-button" onClick={this.handleClear}>
            clear
          </p>
        </div>
        <form className="radio-container" onChange={this.handleChange}>
          <label id="balanced" className="radio-wrapper">
            Balanced
            <input
              className="checkmark"
              type="radio"
              name="diet"
              value="balanced"
            />
            <div className="custom-checkmark">
              <div className="mini-custom-checkmark"></div>
            </div>
          </label>
          <label id="low-carb" className="radio-wrapper">
            Low-carb
            <input
              className="checkmark"
              type="radio"
              name="diet"
              value="low-carb"
            />
            <div className="custom-checkmark">
              <div className="mini-custom-checkmark"></div>
            </div>
          </label>
          <label id="low-fat" className="radio-wrapper">
            Low-fat
            <input
              className="checkmark"
              type="radio"
              name="diet"
              value="low-fat"
            />
            <div className="custom-checkmark">
              <div className="mini-custom-checkmark"></div>
            </div>
          </label>
          <label id="high-protein" className="radio-wrapper">
            High-protein
            <input
              className="checkmark"
              type="radio"
              name="diet"
              value="high-protein"
            />
            <div className="custom-checkmark">
              <div className="mini-custom-checkmark"></div>
            </div>
          </label>
        </form>
      </div>
    );
  }
}

export default DietFilters;
