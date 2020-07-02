import React, { Component } from "react";
import "../stylesheets/HealthFilters.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

class HealthFilters extends Component {
  //   handleChange = (event) => {
  //     this.props.onChange(
  //       event.target.name,
  //       event.target.value,
  //       event.target.checked
  //     );
  //   };

  handleClick = (event) => {
    console.log(event.target.id);

    var lab = document.getElementById(event.target.id);
    console.log(lab);
    // if (lab.className.match("active-filter")) {
    //   lab.classList.remove("active-filter");
    // } else {
    //   lab.classList.add("active-filter");
    // }
  };

  render() {
    return (
      <div>
        <p>HEALTH & ALLERGIES</p>
        <div className="health-filters-container">
          <div
            id="peanut-free"
            onClick={this.handleClick}
            className="filter-btn"
          >
            peanut-free
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
          <div
            id="tree-nut-free"
            onClick={this.handleClick}
            className="filter-btn"
          >
            tree nut-free
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
          {/* <div
            id="alcohol-free"
            onClick={this.handleClick}
            className="filter-btn"
          >
            alcohol-free
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
        </div>
        <div className="health-filters-container">
          <div
            id="sugar-concious"
            onClick={this.handleClick}
            className="filter-btn"
          >
            sugar-concious
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
          <div id="vegan" onClick={this.handleClick} className="filter-btn">
            vegan
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
          <div
            id="vegetarian"
            onClick={this.handleClick}
            className="filter-btn"
          >
            vegetarian
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default HealthFilters;
