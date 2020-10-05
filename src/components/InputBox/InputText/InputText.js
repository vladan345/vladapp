import React from "react";

const InputText = (props) => {
  return (
    <div className="InputText">
      <p>Enter task</p>
      <input type="text" className="InputText-field" min="1" max="8" />
    </div>
  );
};

export default InputText;
