import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, type, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <>
      <article
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
        className={`color-box ${index > 7 && "shadow-text"}`}
        style={{ backgroundColor: `rgb(${bgColor})` }}
      >
        <p>{weight} %</p>
        <p>{hexValue}</p>
        {alert && <h5 className="alert">Copied to Clipboard</h5>}
      </article>
    </>
  );
};

export default SingleColor;
