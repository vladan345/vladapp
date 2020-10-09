import React, { Component } from "react";
import "./Input.css";
import Clock from "./Clock/Clock";
class Input extends Component {
  state = {
    hoursValue: 0,
    taskValue: "",
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
  taskHandler = (event) => {
    this.setState({ taskValue: event.target.value });
  };
  render() {
    return (
      <div className="Input">
        <div className="InputWrap">
          <div className="InputText">
            <p>Enter task</p>
            <input
              type="text"
              className="InputText-field"
              min="1"
              max="8"
              onChange={this.taskHandler}
            />
          </div>
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
        </div>
        <Clock hours={this.state.hoursValue} task={this.state.taskValue} />
      </div>
    );
  }
}

export default Input;
