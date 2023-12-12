import "./styles/main.scss";

function App() {
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
        <div className="all-buttons">
          <button className="calc-buttons" onClick={() => onclick()}>
            del
          </button>
          <button className="calc-buttons" onclick={() => onclick()}>
            +
          </button>
          <button className="calc-buttons" onclick={() => onclick()}>
            -
          </button>
          <button className="calc-buttons" onclick={() => onclick()}>
            x
          </button>
          <button className="calc-buttons" onClick={() => onclick(1)}>
            1
          </button>
          <button className="calc-buttons" onClick={() => onclick(2)}>
            2
          </button>
          <button className="calc-buttons" onClick={() => onclick(3)}>
            3
          </button>
          <button className="calc-buttons" onClick={() => onclick(4)}>
            4
          </button>
          <button className="calc-buttons" onClick={() => onclick(5)}>
            5
          </button>
          <button className="calc-buttons" onClick={() => onclick(6)}>
            6
          </button>
          <button className="calc-buttons" onClick={() => onclick(7)}>
            7
          </button>
          <button className="calc-buttons" onClick={() => onclick(8)}>
            8
          </button>
          <button className="calc-buttons" onClick={() => onclick(9)}>
            9
          </button>
          <button className="calc-buttons" onClick={() => onclick(0)}>
            0
          </button>
          <button className="reset-equal" onclick={() => onclick()}>
            RESET
          </button>
          <button className="reset-equal" onclick={() => onclick()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
