import React, { useState } from "react";
// import * as mathjs from "mathjs";
import "./styles/main.scss";

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

function App({ type, onClick, theme, handleClick }) {
  const [currentTheme, setCurrentTheme] = useState("theme-1");
  const [calculation, setCalculation] = useState("");

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
      <div className={`screen ${currentTheme}`}>
        <div className="calc-numbers">{calculation || "0"}</div>
      </div>
      <CalculatorButtons
        theme={currentTheme}
        calculation={calculation}
        setCalculation={setCalculation}
      />
    </div>
  );
}

function ToggleSwitch() {
  const [selectedState, setSelectedState] = useState(1);

  const handleToggle = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      // Check if parsed value is not NaN
      setSelectedState(value);
    } else {
      // Handle invalid input (e.g., log a warning or display an error message)
    }
  };

  return (
    <div className="color-slider" onClick={handleToggle}>
      <div className={`slider-position pos-${selectedState}`} />
      <input
        type="radio"
        id="color1"
        name="color"
        value={1}
        checked={selectedState === 1}
        onChange={handleToggle}
        readOnly
      />
      <input
        type="radio"
        id="color2"
        name="color"
        value={2}
        checked={selectedState === 2}
        onChange={handleToggle}
        readOnly
      />
      <input
        type="radio"
        id="color3"
        name="color"
        value={3}
        checked={selectedState === 3}
        onChange={handleToggle}
        readOnly
      />
    </div>
  );
}

// Color and size for buttons, del, equal and reset
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

const CalculatorButtons = ({ theme, value, calculation, setCalculation }) => {
  // Define handleClick here
  const handleClick = (value) => {
    setCalculation((prevCalculation) => prevCalculation + value);
  };
  // Handles the logic for each type of button you click
  const handleDelClick = () => {
    setCalculation((prevCalculation) => prevCalculation.slice(0, -1));
  };

  const handlePlusClick = () => {
    setCalculation((prevCalculation) => prevCalculation + "+");
  };
  const handleMinusClick = () => {
    setCalculation((prevCalculation) => prevCalculation + "-");
  };
  const handleMultiClick = () => {
    setCalculation((prevCalculation) => prevCalculation + "*");
  };
  const handleDivideClick = () => {
    setCalculation((prevCalculation) => prevCalculation + "/");
  };
  const handleDecimalClick = () => {
    setCalculation((prevCalculatin) => prevCalculatin + ".");
  };
  const handleResetClick = () => {
    setCalculation("");
  };
  const handleEqualClick = () => {
    try {
      const result = eval(calculation);
      setCalculation(result.toString()); // Update the calculation state with the result
    } catch (error) {
      // Handle errors or invalid calculations here
      console.error("Invalid calculation:", error);
      setCalculation("Error"); // Display an error message or handle the error as needed
    }
  };

  return (
    <div className={`container-btn ${theme}`}>
      {buttonData.map((item, i) => (
        <Button
          key={i}
          value={item.value}
          type={item.type}
          onClick={
            item.type === "del"
              ? handleDelClick
              : item.type === "operator" && item.value === "+"
              ? handlePlusClick
              : item.type === "operator" && item.value === "-"
              ? handleMinusClick
              : item.type === "operator" && item.value === "x"
              ? handleMultiClick
              : item.type === "operator" && item.value === "/"
              ? handleDivideClick
              : item.type === "operator" && item.value === "."
              ? handleDecimalClick
              : item.type === "function" && item.value === "RESET"
              ? handleResetClick
              : item.type === "operator" && item.value === "="
              ? handleEqualClick
              : () => handleClick(item.value)
          }
          theme={theme}
        />
      ))}
    </div>
  );
};

export default App;
