import React, { Component } from "react";

class Checkbox extends Component {
  handleChange = (event) => {
    this.props.onChange(
      event.target.name,
      event.target.value,
      event.target.checked
    );
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type="checkbox"
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Checkbox;
