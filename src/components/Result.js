import React, { useState } from "react";
import Keyboard from './Keyboard.js';


const Result = () => {
  const [value, setValue] = useState("");

  const handleButtonClick = (text) => {
    if (text === "Borrar") {
      setValue(value.slice(0, -1));
    } else {
      setValue(value + text);
    }
  };

  return (
    <>
      <div>{value}</div>
      <Keyboard handleButtonClick={handleButtonClick} />
    </>
  );
};

export default Result;
