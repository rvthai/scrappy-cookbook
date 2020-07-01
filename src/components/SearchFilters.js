import React, { Component } from "react";
import "../stylesheets/SearchFilters.css";

// Components
import Checkbox from "./Checkbox";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { isCompositeComponent } from "react-dom/test-utils";

class SearchFilters extends Component {
  componentDidMount() {
    // Attach a click listener on the document.
    window.addEventListener("click", this.clickListener);
  }

  componentWillUnmount() {
    // Detach the click listener on the document.
    window.removeEventListener("click", this.clickListener);
  }

  clickListener = (e) => {
    console.log("document clicked");
    var btn = document.getElementById("btn");
    var click = document.getElementById("dropdown-content");
    if (
      click.style.display === "block" &&
      !document.getElementById("btn").contains(e.target) &&
      !click.contains(e.target)
    ) {
      console.log("cancel him");
      click.style.display = "none";
      btn.classList.remove("active");
    } else {
      console.log("nothing");
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

  handleDiet = (event) => {
    this.props.onFiltersChange(event.target.name, event.target.value);
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
          <div style={{ display: "none" }} id="dropdown-content">
            <Checkbox
              onChange={this.handleHealth}
              id="peanut-free"
              name="health"
              value="peanut-free"
              label="Peanuts"
            />
            <Checkbox
              onChange={this.handleHealth}
              id="tree-nut-free"
              name="health"
              value="tree-nut-free"
              label="Tree-nuts"
            />
            <h2>Health</h2>
            <Checkbox
              onChange={this.handleHealth}
              id="vegan"
              name="health"
              value="vegan"
              label="vegan"
            />
            <Checkbox
              onChange={this.handleHealth}
              id="vegetarian"
              name="health"
              value="vegetarian"
              label="vegetarian"
            />
            <Checkbox
              onChange={this.handleHealth}
              id="sugar-conscious"
              name="health"
              value="sugar-conscious"
              label="sugar-conscious"
            />
            <Checkbox
              onChange={this.handleHealth}
              id="alcohol-free"
              name="health"
              value="alcohol-free"
              label="alcohol-free"
            />
            <form onChange={this.handleDiet}>
              <label htmlFor="balanced">balanced</label>
              <input type="radio" id="balanced" name="diet" value="balanced" />
              <label htmlFor="low-carb">low-carb</label>
              <input type="radio" id="low-carb" name="diet" value="low-carb" />
              <label htmlFor="low-fat">low-fat</label>
              <input type="radio" id="low-fat" name="diet" value="low-fat" />
              <label htmlFor="high-protein">high-protein</label>
              <input
                type="radio"
                id="high-protein"
                name="diet"
                value="high-protein"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilters;
