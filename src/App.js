import React, { useState } from "react";
import "./styles/main.scss";

function App() {
  const [selectedColor, setSelectedColor] = useState("color1");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.id);
  };

  return (
    <div className="container">
      {/* <div className="header">
        <h3 className="calc">calc</h3>
        <h1>THEME</h1>
        <div className="color-slider">
          <input type="radio" id="color1" name="color"></input>
          <label htmlFor="color1"></label>
          <input type="radio" id="color2" name="color"></input>
          <label htmlFor="color2"></label>
          <input type="radio" id="color3" name="color"></input>
          <label htmlFor="color3"></label>
        </div>
      </div> */}
      <div className="numbers">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div className="header">
        <h3 className="calc">calc</h3>
        <h1>THEME</h1>
        <div className="color-slider">
          <input
            type="radio"
            id="color1"
            name="color"
            checked={selectedColor === "color1"}
            onChange={handleColorChange}
          />
          <label htmlFor="color1"></label>

          <input
            type="radio"
            id="color2"
            name="color"
            checked={selectedColor === "color2"}
            onChange={handleColorChange}
          />
          <label htmlFor="color2"></label>

          <input
            type="radio"
            id="color3"
            name="color"
            checked={selectedColor === "color3"}
            onChange={handleColorChange}
          />
          <label htmlFor="color3"></label>
        </div>
      </div>
      <div className="screen">399,981</div>
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
