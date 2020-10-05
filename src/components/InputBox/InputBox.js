import React from "react";
import InputText from "./InputText/InputText";
import InputHours from "./InputHours/InputHours";
import "./InputBox.css";

const InputBox = (props) => {
  return (
    <div className="InputBox">
      <InputText />
      <InputHours />
      <button className="start">Start</button>
    </div>
  );
};

export default InputBox;
