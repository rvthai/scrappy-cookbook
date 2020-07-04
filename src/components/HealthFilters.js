import React, { Component } from "react";
import "../stylesheets/HealthFilters.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

class HealthFilters extends Component {
  handleClick = (id) => {
    var lab = document.getElementById(id);
    var ic = document.getElementById(id.concat("-icon"));
    console.log(lab);
    if (lab.className.match("active-filter")) {
      lab.classList.remove("active-filter");
      ic.style.display = "none";
      this.props.onChange("health", id, false);
    } else {
      lab.classList.add("active-filter");
      ic.style.display = "inline-block";
      this.props.onChange("health", id, true);
    }
  };

  handleClear = () => {
    var l = document.getElementsByClassName("active-filter");

    while (l.length > 0) {
      var ic = document.getElementById(l[0].id.concat("-icon"));
      l[0].classList.remove("active-filter");
      ic.style.display = "none";
    }
  };

  render() {
    return (
      <div>
        <div className="mini-header-health">
          <p className="start">HEALTH</p>
          <p onClick={this.handleClear} className="end">
            clear
          </p>
        </div>
        <div className="health-filters-container">
          <div
            id="peanut-free"
            onClick={() => this.handleClick("peanut-free")}
            className="filter-btn"
          >
            peanut-free
            <FontAwesomeIcon
              id="peanut-free-icon"
              className="label-icon"
              icon={faTimes}
            />
          </div>
          <div
            id="tree-nut-free"
            onClick={() => this.handleClick("tree-nut-free")}
            className="filter-btn"
          >
            tree nut-free
            <FontAwesomeIcon
              id="tree-nut-free-icon"
              className="label-icon"
              icon={faTimes}
            />
          </div>
        </div>
        <div className="health-filters-container">
          <div
            id="sugar-concious"
            onClick={() => this.handleClick("sugar-concious")}
            className="filter-btn"
          >
            sugar-concious
            <FontAwesomeIcon
              id="sugar-concious-icon"
              className="label-icon"
              icon={faTimes}
            />
          </div>
          <div
            id="vegan"
            onClick={() => this.handleClick("vegan")}
            className="filter-btn"
          >
            vegan
            <FontAwesomeIcon
              id="vegan-icon"
              className="label-icon"
              icon={faTimes}
            />
          </div>
        </div>
        <div className="health-filters-container">
          <div
            id="alcohol-free"
            onClick={() => this.handleClick("alcohol-free")}
            className="filter-btn"
          >
            alcohol-free
            <FontAwesomeIcon
              id="alcohol-free-icon"
              className="label-icon"
              icon={faTimes}
            />
          </div>
          <div
            id="vegetarian"
            onClick={() => this.handleClick("vegetarian")}
            className="filter-btn"
          >
            vegetarian
            <FontAwesomeIcon
              id="vegetarian-icon"
              className="label-icon"
              icon={faTimes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HealthFilters;
