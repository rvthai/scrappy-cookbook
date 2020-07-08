import React, { Component } from "react";
import "stylesheets/recipes/search/filters/HealthFilters.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class HealthFilters extends Component {
  componentDidMount() {
    const health_filters = this.props.filters.health;
    for (var i = 0; i < health_filters.length; i++) {
      var label = document.getElementById(health_filters[i]);
      var icon = document.getElementById(health_filters[i].concat("-icon"));
      label.classList.add("active-health-label");
      icon.style.display = "inline-block";
    }
  }

  handleClick = (id) => {
    var label = document.getElementById(id);
    var icon = document.getElementById(id.concat("-icon"));

    if (label.className.match("active-health-label")) {
      label.classList.remove("active-health-label");
      icon.style.display = "none";
      this.props.onChange("health", id, false);
    } else {
      label.classList.add("active-health-label");
      icon.style.display = "inline-block";
      this.props.onChange("health", id, true);
    }
  };

  handleClear = () => {
    var labels = document.getElementsByClassName("active-health-label");

    while (labels.length > 0) {
      var icon = document.getElementById(labels[0].id.concat("-icon"));
      labels[0].classList.remove("active-health-label");
      icon.style.display = "none";
    }
  };

  render() {
    return (
      <div>
        <div className="health-heading">
          <p>HEALTH</p>
          <p className="clear-button" onClick={this.handleClear}>
            clear
          </p>
        </div>
        <div className="health-filters-container">
          <div
            id="peanut-free"
            onClick={() => this.handleClick("peanut-free")}
            className="label"
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
            className="label"
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
            id="sugar-conscious"
            onClick={() => this.handleClick("sugar-conscious")}
            className="label"
          >
            sugar-conscious
            <FontAwesomeIcon
              id="sugar-conscious-icon"
              className="label-icon"
              icon={faTimes}
            />
          </div>
          <div
            id="vegan"
            onClick={() => this.handleClick("vegan")}
            className="label"
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
            className="label"
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
            className="label"
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
