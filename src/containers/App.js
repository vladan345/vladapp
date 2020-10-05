import React, { Component } from "react";
import "./App.css";
import SmartWrap from "./SmartWrap/SmartWrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PapaVlad's working timer</h1>
        <SmartWrap />
      </div>
    );
  }
}

export default App;
