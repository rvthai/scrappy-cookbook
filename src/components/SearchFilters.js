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
        <h2>Allergies</h2>
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
        <h2>Health</h2>
        <Checkbox
          onChange={this.handleHealthChange}
          id="vegan"
          name="health"
          value="vegan"
          label="vegan"
        />
        <Checkbox
          onChange={this.handleHealthChange}
          id="vegetarian"
          name="health"
          value="vegetarian"
          label="vegetarian"
        />
        <Checkbox
          onChange={this.handleHealthChange}
          id="sugar-conscious"
          name="health"
          value="sugar-conscious"
          label="sugar-conscious"
        />
        <Checkbox
          onChange={this.handleHealthChange}
          id="alcohol-free"
          name="health"
          value="alcohol-free"
          label="alcohol-free"
        />

        <h2>Diet</h2>
        <form onChange={this.handleDietChange}>
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
    );
  }
}

export default SearchFilters;
