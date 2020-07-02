import React, { Component } from "react";
import "../stylesheets/HealthFilters.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class HealthFilters extends Component {
  //   handleChange = (event) => {
  //     this.props.onChange(
  //       event.target.name,
  //       event.target.value,
  //       event.target.checked
  //     );
  //   };

  constructor(props) {
    super(props);

    this.state = {
      icon: "",
    };
  }

  handleClick = (id) => {
    console.log(id);

    var lab = document.getElementById(id);
    console.log(lab);
    if (lab.className.match("active-filter")) {
      lab.classList.remove("active-filter");
      this.setState({ icon: "" });
    } else {
      lab.classList.add("active-filter");
      this.setState({ icon: faTimes });
    }
  };

  render() {
    return (
      <div>
        <p>HEALTH & ALLERGIES</p>
        <div className="health-filters-container">
          <div
            id="peanut-free"
            onClick={() => this.handleClick("peanut-free")}
            className="filter-btn"
          >
            peanut-free
            <FontAwesomeIcon className="label-icon" icon={faTimes} />
          </div>
          <div
            id="tree-nut-free"
            onClick={() => this.handleClick("tree-nut-free")}
            className="filter-btn"
          >
            tree nut-free
            <FontAwesomeIcon className="label-icon" icon={faTimes} />
          </div>
        </div>
        <div className="health-filters-container">
          <div
            id="sugar-concious"
            onClick={() => this.handleClick("sugar-concious")}
            className="filter-btn"
          >
            sugar-concious
            <FontAwesomeIcon className="label-icon" icon={faTimes} />
          </div>
          <div
            id="vegan"
            onClick={() => this.handleClick("vegan")}
            className="filter-btn"
          >
            vegan
            <FontAwesomeIcon className="label-icon" icon={faTimes} />
          </div>
        </div>
        <div className="health-filters-container">
          <div
            id="alcohol-free"
            onClick={() => this.handleClick("alcohol-free")}
            className="filter-btn"
          >
            alcohol-free
            <FontAwesomeIcon className="label-icon" icon={faTimes} />
          </div>
          <div
            id="vegetarian"
            onClick={() => this.handleClick("vegetarian")}
            className="filter-btn"
          >
            vegetarian
            <FontAwesomeIcon className="label-icon" icon={faTimes} />
          </div>
        </div>
      </div>
    );
  }
}

export default HealthFilters;
