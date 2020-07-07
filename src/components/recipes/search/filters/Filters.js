import React, { Component } from "react";
import "stylesheets/recipes/search/filters/Filters.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faAngleDown } from "@fortawesome/free-solid-svg-icons";

// Components
import HealthFilters from "components/recipes/search/filters/HealthFilters";
import DietFilters from "components/recipes/search/filters/DietFilters";

class Filters extends Component {
  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
  }

  handleWindowClick = (event) => {
    var dropdown = document.getElementById("dropdown-content");
    var button = document.getElementById("filters-button");

    if (
      dropdown.style.display === "block" &&
      !button.contains(event.target) &&
      !dropdown.contains(event.target)
    ) {
      this.hideFilters();
    }
  };

  hideFilters = () => {
    var dropdown = document.getElementById("dropdown-content");
    var button = document.getElementById("filters-button");
    var arrow = document.getElementById("arrow-icon");

    dropdown.style.display = "none";
    button.classList.remove("active");
    arrow.classList.remove("reverse");
  };

  displayFilters = () => {
    var dropdown = document.getElementById("dropdown-content");
    var arrow = document.getElementById("arrow-icon");
    var button = document.getElementById("filters-button");

    dropdown.style.display = "block";
    button.classList.add("active");
    arrow.classList.add("reverse");
  };

  handleClick = () => {
    var dropdown = document.getElementById("dropdown-content");

    if (dropdown.style.display === "none") {
      this.displayFilters();
    } else {
      this.hideFilters();
    }
  };

  handleHealthChange = (name, value, checked) => {
    if (checked) {
      this.props.filters.health.push(value);
    } else {
      const index = this.props.filters.health.indexOf(value);
      if (index > -1) {
        this.props.filters.health.splice(index, 1);
      }
    }

    this.props.onFiltersChange(name, this.props.filters.health);
  };

  handleDietChange = (name, value) => {
    this.props.onFiltersChange(name, value);
  };

  handleCancel = () => {
    this.hideFilters();
  };

  handleApply = (event) => {
    this.hideFilters();
    this.props.onFiltersApply(event);
  };

  render() {
    return (
      <div className="dropdown-container">
        <button
          id="filters-button"
          onClick={this.handleClick}
          className="filters-button"
        >
          <FontAwesomeIcon className="filter-icon" icon={faFilter} />
          FILTERS
          <FontAwesomeIcon
            id="arrow-icon"
            className="arrow-icon"
            icon={faAngleDown}
          />
        </button>
        <div
          className="dropdown-content"
          style={{ display: "none" }}
          id="dropdown-content"
        >
          <HealthFilters
            filters={this.props.filters}
            onChange={this.handleHealthChange}
          />
          <div className="hr" />
          <DietFilters
            filters={this.props.filters}
            onChange={this.handleDietChange}
          />
          <div className="hr" />
          <div className="action-buttons">
            <p className="cancel-button" onClick={this.handleCancel}>
              Cancel
            </p>
            <p className="apply-button" onClick={this.handleApply}>
              Apply
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
