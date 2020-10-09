import React, { Component } from "react";
import "./App.css";
import Input from "../components/Input/Input";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PapaVlad's working timer</h1>
        <Input />
      </div>
    );
  }
}

export default App;
