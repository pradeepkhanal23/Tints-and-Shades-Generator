import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <div className="header-container">
          <h1>Tint & Shade Generator</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="#f15025"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className={`${error ? "error" : null}`}
            />
            <button type="submit" className="btn">
              Generate
            </button>
          </form>
        </div>
      </header>
      <h2 className="example">Try some hex values</h2>
      <section className="color-pallettes">
        <div className="color-pallette">
          <div className="color-pallette-content"></div>
          <p>#eeedfo</p>
        </div>
        <div className="color-pallette">
          <div className="color-pallette-content"></div>
          <p>#a1b5c1</p>
        </div>
        <div className="color-pallette">
          <div className="color-pallette-content"></div>
          <p>#9faca7</p>
        </div>
        <div className="color-pallette">
          <div className="color-pallette-content"></div>
          <p>#68747d</p>
        </div>
        <div className="color-pallette">
          <div className="color-pallette-content"></div>
          <p>#cf365f</p>
        </div>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
