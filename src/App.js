import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Cell extends Component {
  state = {
    number: 1,
  };
  render() {
    return (
      <div
        className="cell"
        onClick={(e) => {
          // alert(this.state.number);
          this.setState({
            number: (this.state.number + 1) % 5,
          });
        }}
      >
        {this.state.number !== 0 && this.state.number}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="board">
          <Cell number={2} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
        </div>
      </div>
    );
  }
}

export default App;
