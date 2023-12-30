import React, { useState, useEffect } from "react";
import * as math from "mathjs";
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

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  useEffect(() => {
    if (currentTheme === "theme-1") {
      document.body.style.backgroundColor = ""; // "" Resets to default background color
    } else if (currentTheme === "theme-2") {
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    } else if (currentTheme === "theme-3") {
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    }
  }, [currentTheme]);

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
        <ToggleSwitch setCurrentTheme={handleThemeChange} />
      </div>
      <div className={`screen ${currentTheme}`}>
        <div className={`calc-numbers ${currentTheme}`}>
          {calculation || "399,981"}
        </div>
      </div>
      <CalculatorButtons
        theme={currentTheme}
        calculation={calculation}
        setCalculation={setCalculation}
      />
      <div class="footer">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/2dkn">Kevin Neely</a>
      </div>
    </div>
  );
}

function ToggleSwitch({ currentTheme, setCurrentTheme }) {
  const [selectedState, setSelectedState] = useState(1);

  const handleToggle = (e) => {
    const value = parseInt(e.target.value);
    // Checks if parsed value is not NaN(Not a Number)
    if (!isNaN(value)) {
      setSelectedState(value);

      // Updates the theme based on the selected state
      switch (value) {
        case 1:
          setCurrentTheme("theme-1");
          break;
        case 2:
          setCurrentTheme("theme-2");
          break;
        case 3:
          setCurrentTheme("theme-3");
          break;
        default:
          break;
      }
    } else {
      // Handle invalid input (e.g., log a warning or display an error message)
    }
  };

  return (
    <div className={`color-slider ${currentTheme}`} onClick={handleToggle}>
      <div className={`slider-position pos-${selectedState} ${currentTheme}`} />
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
    // Not the safe way to do
    // try {
    //   const result = eval(calculation);
    //   setCalculation(result.toString()); // Update the calculation state with the result
    // } catch (error) {
    //   // Handle errors or invalid calculations here
    //   console.error("Invalid calculation:", error);
    //   setCalculation("Error"); // Display an error message or handle the error as needed
    // }

    try {
      const result = math.evaluate(calculation);
      setCalculation(result.toString());
    } catch (error) {
      console.error("Invalid calculation:", error);
      setCalculation("Error");
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
