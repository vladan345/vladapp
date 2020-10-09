import React, { Component } from "react";
import "./Clock.css";
import pause from "../../../assets/pause.svg";
import play from "../../../assets/play.svg";
import help from "../../../assets/help.svg";

class Clock extends Component {
  state = {
    h: this.props.hours,
    m: "0" + 0,
    s: "0" + 0,
    taskValueStart: <span>&nbsp;</span>,
  };
  timer;
  start = () => {
    this.setState({ taskValueStart: this.props.task });
    this.timer = setInterval(() => {
      this.setState({ h: this.props.hours });
      this.setState({ s: this.state.s - 1 });

      if (this.state.s < 0) {
        this.setState({ s: 59 });
      }
      this.state.s < 10
        ? this.setState({ s: "0" + this.state.s })
        : this.setState({ s: this.state.s });

      //------------------------------------------------//
      if (this.state.s === 59) {
        this.setState({ m: this.state.m - 1 });
        if (this.state.m < 0) {
          this.setState({ m: 59 });
        } else {
          if (this.state.m < 10) {
            this.setState({ m: "0" + this.state.m });
          }
        }
      }

      //------------------------------------------------//
      if (this.state.m === 59) {
        this.setState({ h: this.state.h - 1 });
      }
      if (this.state.h < 0) {
        this.setState({ h: 0 });
      }
    }, 1000);
  };
  pause = () => {
    clearInterval(this.timer);
  };
  render() {
    return (
      <div className="Clock">
        <button className="start" onClick={this.start}>
          Start
        </button>
        <h1 className="taskHeader">{this.state.taskValueStart}</h1>
        <div className="Timer">
          <h2>
            0{this.state.h}:{this.state.m}:{this.state.s}
          </h2>
          <div className="controls">
            <button className="controlBtn" onClick={this.pause}>
              <img src={pause} alt="pause" />
            </button>
            <button className="controlBtn" onClick={this.start}>
              <img src={play} alt="play" />
            </button>
            <button className="controlBtn">
              <img src={help} alt="help" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Clock;
