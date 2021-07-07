import React, { useState, useEffect } from "react";
import "./App.css";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import Login from './Login';
//add import for new comp

var randomColor = require("randomcolor");

function App() {
  const [login, setLogin] = useState({pos:{ x: 0, y: 0 },exp:false , disp:false});
  const [screen,setScreen] = useState(0);
  // const [xyz, setxyz] = useState({pos:{ x: 0, y: 0 },exp:false}); add for your com change loginand setlogin
const updateView = (lbl)=>{
  switch (lbl) {
    case "login":
      setLogin({ ...login, disp: true });
      break;
      default:
        break;
  }
}
  const updatePos = (data, index, custom = undefined) => {
    if (custom) {
      // eslint-disable-next-line default-case
      switch (custom.type) {
        case "login":
          setLogin({pos:{ x: data.x, y: data.y },exp:true,disp: true});
          break;
          default:
          console.log('TBD');
            break;
      }

    } 
  };

  return (
    <div className="App">
     <button className="addScreen" onClick={()=>setScreen(screen+1)}>Add New Screen</button>
     <div className="vl"></div>
     {screen > 0 && <div className="v2"></div>}
     {screen > 1 && <div className="v3"></div>}
      <div id="mySidenav" className="sidenav">
      {login.disp && <p>Login </p>}
      <Draggable
        key="1"
        defaultPosition={login.pos}
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'login' });
        }}
        onStart={()=>{
          updateView('login');
        }}
      >
        <p>
        <Login expanded={login.exp}></Login>
        </p>
      </Draggable>
  
      </div>  
      <button className="export">Export Package</button>
    </div>
  );
}

export default App;
