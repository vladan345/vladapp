import React, { Component } from "react";
import InputBox from "../../components/InputBox/InputBox";
import "./SmartWrap.css";
class SmartWrap extends Component {
  render() {
    return (
      <div className="SmartWrap">
        <InputBox />
      </div>
    );
  }
}

export default SmartWrap;
