import React, { Component } from "react";

class SearchFilters extends Component {
  handleChange = (event) => {
    this.props.onFilterChange(event.target.id, event.target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="diet">Choose a dietType:</label>
        <select onChange={this.handleChange} name="Diet Type" id="diet">
          <option value="balanced">Balanced</option>
          <option value="high-protein">High Protein</option>
          <option value="high-fiber">High Fiber</option>
          <option value="low-fat">Low Fat</option>
          <option value="low-carb">Low Carb</option>
          <option value="low-sodium">Low Sodium</option>
        </select>
      </div>
    );
  }
}

export default SearchFilters;
