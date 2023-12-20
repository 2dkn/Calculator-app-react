import React, { useState } from "react";
import * as mathjs from "mathjs";
import "./styles/main.scss";

function ToggleSwitch() {
  const [selectedState, setSelectedState] = useState(1);

  const handleToggle = () => {
    setSelectedState((prevState) => {
      //  Logic to toggle between three states (1, 2, 3) might change to click individually
      if (prevState === 1) {
        // onThemeChange("theme-1");
        return 2;
      } else if (prevState === 2) {
        // onThemeChange("theme-2");
        return 3;
      } else {
        // onThemeChange("theme-3");
        return 1;
      }
    });
  };

  return (
    <div className="color-slider" onClick={handleToggle}>
      <div className={`slider-position pos-${selectedState}`} />
      <input
        type="radio"
        id="color1"
        name="color"
        checked={selectedState === 1}
        readOnly
      />
      <input
        type="radio"
        id="color2"
        name="color"
        checked={selectedState === 2}
        readOnly
      />
      <input
        type="radio"
        id="color3"
        name="color"
        checked={selectedState === 3}
        readOnly
      />
    </div>
  );
}

const buttonData = [
  { value: 7, type: "number" },
  { value: 8, type: "number" },
  { value: 9, type: "number" },
  { value: "DEL", type: "del" },
  { value: 4, type: "number" },
  { value: 5, type: "number" },
  { value: 6, type: "number" },
  { value: "+", type: "operator" },
  { value: 1, type: "number" },
  { value: 2, type: "number" },
  { value: 3, type: "number" },
  { value: "-", type: "operator" },
  { value: ".", type: "operator" },
  { value: 0, type: "number" },
  { value: "/", type: "operator" },
  { value: "x", type: "operator" },
  { value: "RESET", type: "function" },
  { value: "=", type: "operator" },
];

const Button = ({ value, type, onClick, theme }) => (
  <button
    className={`calc-buttons ${theme} 
      ${type === "del" ? "del-button" : ""}
       ${
         type === "function" && value === "RESET"
           ? "reset-equal reset-button"
           : ""
       } 
       ${type === "operator" && value === "=" ? "reset-equal equal-button" : ""}
       `}
    onClick={() => onClick(value)}
  >
    {value}
  </button>
);

// const CalculatorButtons = ({ value, type, theme, onClick }) => (

//   <div className={`container-btn ${theme}`}>
//     {buttonData.map((item) => (
//       <Button
//         key={item.value}
//         value={item.value}
//         type={item.type}
//         onClick={() => onClick(item.value)}
//         theme={theme}
//       />
//     ))}
//   </div>
// );

const CalculatorButtons = ({ theme }) => {
  // Define handleClick here
  const handleClick = (value) => {
    // Button click logic goes here
  };

  return (
    <div className={`container-btn ${theme}`}>
      {buttonData.map((item) => (
        <Button
          key={item.value}
          value={item.value}
          type={item.type}
          onClick={() => handleClick(item.value)} // Use the local handleClick
          theme={theme}
        />
      ))}
    </div>
  );
};

function App({ value, type, onClick, theme }) {
  const [currentTheme, setCurrentTheme] = useState("theme-1");
  const [calculation, setCalculation] = useState("");

  const handleClick = (value) => {
    switch (value) {
      case "DEL":
        setCalculation({
          calculation: calculation.slice(0, -1), // Remove last character
        });
        break;
      case "+":
      case "-":
      case "/":
      case "x":
      case ".":
        setCalculation({
          calculation: calculation + value, // Append operator/decimal
        });
        break;
      case "RESET":
        setCalculation({
          calculation: "", // Clear calculation. means empty string
        });
        break;
      case "=":
        // Perform calculation using a library like mathjs
        const result = mathjs.evaluate(calculation);
        setCalculation({
          calculation: result.toString(), // Display result
        });
        break;
      default:
        // Handle numbers
        setCalculation({
          calculation:
            calculation.length === 0 ||
            calculation[calculation.length - 1] === "="
              ? value // Start a new number
              : calculation + value, // Append to existing number
        });
    }
  };

  return (
    <div className={`container ${currentTheme}`}>
      <div className={`numbers ${currentTheme}`}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div className={`header ${currentTheme}`}>
        <h3 className={`calc ${currentTheme}`}>calc</h3>
        <h1 className={currentTheme}>THEME</h1>
        <ToggleSwitch />
      </div>
      <div className={`screen ${currentTheme}`}>{calculation}</div>
      <CalculatorButtons theme={currentTheme} onClick={handleClick} />
    </div>
  );
}

export default App;
