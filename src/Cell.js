import React from "react";

const Cell = (props) => (
  <div
    className={`cell ${props.isInitial ? "initial" : ""}`}
    // when we click it will call onChange() function
    onClick={(e) => {
      if (props.isInitial) {
        return;
      }

      props.onChange((props.number + 1) % 5);
    }}
  >
    {props.number !== 0 && props.number}
  </div>
);

export default Cell;
