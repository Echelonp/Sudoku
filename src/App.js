import React, { Component } from "react";
import "./App.css";
import Board from "./Board";
// import { Provider } from "react-redux";
// import { createStore } from "redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board></Board>
      </div>
    );
  }
}

export default App;
