import React from "react";
import { useState } from "react";



function App() {
  const [bgColor, setBgColor] = useState("yellow");

  const red = () => {
    setBgColor('red');
  };
    const yellow = () => {
    setBgColor('yellow');
  };

    const white = () => {
    setBgColor('white');
  };
  
  

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>hi ahmad</h1>
      <button onClick={red}>red</button>
       <button onClick={yellow}>yellow</button>
       <button onClick={white}>white</button>
    </div>
  );
}

export default App;
