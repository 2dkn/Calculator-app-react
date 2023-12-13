import React, { useState } from "react";
import "./styles/main.scss";

function App() {
  // const [displayValue, setDisplayValue] = useState("0");

  return (
    <div className="container">
      <div className="header">
        <h3 className="calc">calc</h3>
        <h1>Theme</h1>
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="radio"></input>
      </div>
      <div className="screen"></div>
      <div className="container-btn">
        <button className="calc-buttons" onClick={() => onclick()}>
          7
        </button>
        <button className="calc-buttons" onclick={() => onclick()}>
          8
        </button>
        <button className="calc-buttons" onclick={() => onclick()}>
          9
        </button>
        <button className="calc-buttons del-button" onclick={() => onclick()}>
          DEL
        </button>
        <button className="calc-buttons" onClick={() => onclick(1)}>
          4
        </button>
        <button className="calc-buttons" onClick={() => onclick(2)}>
          5
        </button>
        <button className="calc-buttons" onClick={() => onclick(3)}>
          6
        </button>

        <button className="calc-buttons" onClick={() => onclick(5)}>
          +
        </button>
        <button className="calc-buttons" onClick={() => onclick(6)}>
          1
        </button>
        <button className="calc-buttons" onClick={() => onclick(7)}>
          2
        </button>
        <button className="calc-buttons" onClick={() => onclick(8)}>
          3
        </button>
        <button className="calc-buttons" onClick={() => onclick(9)}>
          -
        </button>
        <button className="calc-buttons" onClick={() => onclick(0)}>
          .
        </button>
        <button className="calc-buttons" onClick={() => onclick(0)}>
          0
        </button>
        <button className="calc-buttons" onClick={() => onclick(0)}>
          /
        </button>
        <button className="calc-buttons" onClick={() => onclick(0)}>
          x
        </button>
        <button className="reset-equal reset-button" onclick={() => onclick()}>
          RESET
        </button>
        <button className="reset-equal equal-button" onclick={() => onclick()}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
