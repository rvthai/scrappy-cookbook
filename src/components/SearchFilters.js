import React, { Component } from "react";
import Checkbox from "./Checkbox";
class SearchFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }
  handleHealthChange = (name, value, checked) => {
    console.log(name, value, checked);
    if (checked) {
      this.props.tempFilters.health.push(value);
    } else {
      const index = this.props.tempFilters.health.indexOf(value);
      if (index > -1) {
        this.props.tempFilters.health.splice(index, 1);
      }
    }

    this.props.onFilterChange(name, this.props.tempFilters.health);
  };

  handleDietChange = (event) => {
    console.log(event.target.value);
    this.props.onFilterChange(event.target.name, event.target.value);
  };

  render() {
    return (
      <div>
        <Checkbox
          onChange={this.handleHealthChange}
          id="peanut-free"
          name="health"
          value="peanut-free"
          label="Peanuts"
        />
        <Checkbox
          onChange={this.handleHealthChange}
          id="tree-nut-free"
          name="health"
          value="tree-nut-free"
          label="Tree-nuts"
        />
        <form onChange={this.handleDietChange}>
          <label htmlFor="balanced">balanced</label>
          <input type="radio" id="balanced" name="diet" value="balanced" />
          <label htmlFor="low-carb">low-carb</label>
          <input type="radio" id="low-carb" name="diet" value="low-carb" />
        </form>
      </div>
    );
  }
}

export default SearchFilters;
