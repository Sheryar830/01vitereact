import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

function App() {
  const [bgColor, setBgColor] = useState("yellow");
  const [name, setName] = useState("ahmed");
  const [email, setEmail] = useState("ahmed@gmail.com");

  const red = () => setBgColor("red");
  const yellow = () => setBgColor("yellow");
  const white = () => setBgColor("white");

  return (
    <div className="App" style={{ backgroundColor: bgColor, padding: "20px" }}>
      <h1>hi ahmad</h1>

      <button onClick={red}>Red</button>
      <button onClick={yellow}>Yellow</button>
      <button onClick={white}>White</button>

      <h1>
        {name}
        <br />
        {email}
      </h1>

      <TextField
        id="outlined-name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px', marginTop: '10px' }}
      />

      <TextField
        id="outlined-email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginTop: '10px' }}
      />

      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" style={{ backgroundColor: "green" }}>
          <CallOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}

export default App;
