import React, { Component } from "react";
import "stylesheets/recipes/search/filters/DietFilters.css";

class DietFilters extends Component {
  componentDidMount() {
    const dietFilter = this.props.filters.diet;

    var tab = document.getElementById(dietFilter);

    if (tab != null) {
      tab.classList.add("active-btn");
      tab.children[0].checked = true;
    }
  }

  handleChange = (event) => {
    var oldtab = document.getElementsByClassName("active-btn");
    if (oldtab.length > 0) {
      oldtab[0].classList.remove("active-btn");
    }

    var tab = document.getElementById(event.target.value);
    tab.classList.add("active-btn");

    this.props.onChange(event.target.name, event.target.value);
  };

  handleClear = () => {
    var oldtab = document.getElementsByClassName("active-btn");
    if (oldtab.length > 0) {
      oldtab[0].children[0].checked = false;
      oldtab[0].classList.remove("active-btn");
    }
  };

  render() {
    return (
      <div>
        <div className="mini-header">
          <p className="start">DIET</p>
          <p onClick={this.handleClear} className="end">
            clear
          </p>
        </div>
        <form className="container-radio" onChange={this.handleChange}>
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
        </form>
      </div>
    );
  }
}

export default DietFilters;
