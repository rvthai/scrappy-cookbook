import React, { Component } from "react";
import "../stylesheets/SearchFilters.css";

// Components
import HealthFilters from "./HealthFilters";
import DietFilters from "./DietFilters";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faAngleDown } from "@fortawesome/free-solid-svg-icons";

class SearchFilters extends Component {
  componentDidMount() {
    window.addEventListener("click", this.clickListener);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.clickListener);
  }

  clickListener = (e) => {
    var btn = document.getElementById("btn");
    var icon = document.getElementById("arrow");
    var click = document.getElementById("dropdown-content");
    if (
      click.style.display === "block" &&
      !document.getElementById("btn").contains(e.target) &&
      !click.contains(e.target)
    ) {
      click.style.display = "none";
      btn.classList.remove("active");
      icon.classList.remove("open");
    }
  };

  handleHealth = (name, value, checked) => {
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

  handleDiet = (name, value) => {
    this.props.onFiltersChange(name, value);
  };

  showFilters = () => {
    var click = document.getElementById("dropdown-content");
    var icon = document.getElementById("arrow");
    var btn = document.getElementById("btn");
    if (click.style.display === "none") {
      click.style.display = "block";
      icon.classList.add("open");
      btn.classList.add("active");
    } else {
      click.style.display = "none";
      icon.classList.remove("open");
      btn.classList.remove("active");
    }
  };

  render() {
    return (
      <div>
        <div className="dropdown">
          <button id="btn" onClick={this.showFilters} className="dropbtn">
            <FontAwesomeIcon className="filter-icon" icon={faFilter} />
            FILTERS
            <FontAwesomeIcon
              id="arrow"
              className="downarrow-icon"
              icon={faAngleDown}
            />
          </button>
          <div
            className="content"
            style={{ display: "none" }}
            id="dropdown-content"
          >
            <HealthFilters onChange={this.handleHealth} />
            <div className="horizontal-rule" />
            <DietFilters onChange={this.handleDiet} />
            <div className="horizontal-rule" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilters;
