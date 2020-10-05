import React, { Component } from "react";
import "./InputHours.css";
class InputHours extends Component {
  state = {
    hoursValue: 1,
  };
  plusOne = () => {
    if (this.state.hoursValue > 7) {
      this.setState({ hoursValue: this.state.hoursValue });
    } else {
      this.setState({ hoursValue: this.state.hoursValue + 1 });
    }
  };
  minusOne = () => {
    if (this.state.hoursValue < 2) {
      this.setState({ hoursValue: this.state.hoursValue });
    } else {
      this.setState({ hoursValue: this.state.hoursValue - 1 });
    }
  };

  render() {
    return (
      <div className="InputHours">
        <p>Enter number of hours (1-8)</p>
        <div className="inputControls">
          <input
            type="number"
            className="InputHours-field"
            min="1"
            max="8"
            value={this.state.hoursValue}
            disabled
          />
          <div className="HoursButtons">
            <button onClick={this.plusOne}>+</button>
            <button onClick={this.minusOne}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default InputHours;
