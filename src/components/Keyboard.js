import React, { useState } from "react";
import Button from "./Button.js";
import './component-style/keyboard.css'

const keyboardLayout = {
  1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  3: ["z", "x", "c", "v", "b", "n", "m"]
};

const Keyboard = () => {
  const [result, setResult] = useState("");

  const handleButtonClick = (letter) => {
    if (letter === "backspace") {
      setResult(result.slice(0, -1));
    } else if (letter === "space") {
      setResult(result + " ");
    } else {
      setResult(result + letter);
    }
  };

  return (
    <div className="keyboard">
        <div className="result">{result}</div>
      {Object.keys(keyboardLayout).map((rowIndex) => (
        <div key={rowIndex}>
          {keyboardLayout[rowIndex].map((letter) => (
            <Button className="button" key={letter} onClick={() => handleButtonClick(letter)}>
              {letter}
            </Button>
          ))}
        </div>
      ))}
      <Button onClick={() => handleButtonClick("space")}>Espacio</Button>
      <Button onClick={() => handleButtonClick("backspace")}>Borrar</Button>
    </div>
  );
};

export default Keyboard;
