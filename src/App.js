import React, { useState } from "react";
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

function App() {
  const [currentTheme, setCurrentTheme] = useState("theme-1");
  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
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
      <div className={`screen ${currentTheme}`}>399,981</div>
      <div className={`container-btn ${currentTheme}`}>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick()}
        >
          7
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onclick={() => onclick()}
        >
          8
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onclick={() => onclick()}
        >
          9
        </button>
        <button
          className={`calc-buttons del-button ${currentTheme}`}
          onclick={() => onclick()}
        >
          DEL
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(1)}
        >
          4
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(2)}
        >
          5
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(3)}
        >
          6
        </button>

        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(5)}
        >
          +
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(6)}
        >
          1
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(7)}
        >
          2
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(8)}
        >
          3
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(9)}
        >
          -
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(0)}
        >
          .
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(0)}
        >
          0
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(0)}
        >
          /
        </button>
        <button
          className={`calc-buttons ${currentTheme}`}
          onClick={() => onclick(0)}
        >
          x
        </button>
        <button
          className={`reset-equal reset-button ${currentTheme}`}
          onclick={() => onclick()}
        >
          RESET
        </button>
        <button
          className={`reset-equal reset-button ${currentTheme}`}
          onclick={() => onclick()}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
