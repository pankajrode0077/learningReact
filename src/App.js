import React, { useState, useEffect } from "react";
import "./App.css";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import Login from './Login';
//add import for new comp

var randomColor = require("randomcolor");

function App() {
  const [login, setLogin] = useState({pos:{ x: 0, y: 0 },exp:false});
  // const [xyz, setxyz] = useState({pos:{ x: 0, y: 0 },exp:false}); add for your com change loginand setlogin

  const updatePos = (data, index, custom = undefined) => {
    if (custom) {
      switch (custom.type) {
        case "login":
          setLogin({pos:{ x: data.x, y: data.y },exp:true});
          //case "call"
          //setxyz({pos:{ x: data.x, y: data.y },exp:true}); add new function
      }

    } 
  };

  return (
    <div className="App">
      <Draggable
        key="1"
        defaultPosition={login.pos}
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'login' });
        }}
      >
        <p>
        <Login expanded={login.exp}></Login>
        </p>
      </Draggable>
      {/* <Draggable
        key="1"
        defaultPosition={xyz.pos} 
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'call' });
        }}
      >
        <p>
        <Login expanded={xyz.exp}></Login>
        </p>
      </Draggable> */}
    </div>
  );
}

export default App;
