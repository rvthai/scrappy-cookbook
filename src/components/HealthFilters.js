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

  render() {
    return (
      <div>
        <p>HEALTH & ALLERGIES</p>
        <div className="health-filters-container">
          <div className="filter-btn">
            peanut-free
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
          <div className="filter-btn">
            tree nut-free
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
          <div className="filter-btn">
            alcohol-free
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
        </div>
        <div className="health-filters-container">
          <div className="filter-btn">
            sugar-concious
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
          <div className="filter-btn">
            vegan
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
          <div className="filter-btn">
            vegetarian
            <FontAwesomeIcon className="label-icon" icon={faCheck} />
          </div>
        </div>
      </div>
    );
  }
}

export default HealthFilters;
