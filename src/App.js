/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import "./App.css";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import Login from './Login';
import Dialpad from './dialpad/Dialpad';
import Navbar from "./Navbar";
import AgentStatus from "./AgentStatus";
import SideMenu from "./SideMenu";
import StickyNotes from "./StickyNotes";
import Weather from "./Weather";
import DemoComp1 from "./DemoComp1";
import DemoHomeComp from "./DemoHomeComp";
//add import for new comp

var randomColor = require("randomcolor");

function App() {
  const [login, setLogin] = useState({pos:{ x: 0, y: 0 },exp:false , disp:false});
  const [screen,setScreen] = useState(0);
  const [dialpad, setDialpad] = useState({pos:{ x: 0, y: 0 },exp:false, disp:false});
  const [navbar, setNavbar] = useState({pos:{ x: 0, y: 0 },exp:false , disp:false});
  const [agentstatus, setAgentStatus] = useState({pos:{ x: 0, y: 0 },exp:false , disp:false});
  const [sidemenu, setSideMenu] = useState({pos:{ x: 0, y: 0 },exp:false , disp:false});
  const [stickyNotes, setStickyNotes] = useState({pos:{ x: 0, y: 0 },exp:false , disp:false});
  const [weather, setWeather] = useState({pos:{ x: 0, y: 0 },exp:false , disp:false});

  const [step, setStep] = useState(0);
  // const [xyz, setxyz] = useState({pos:{ x: 0, y: 0 },exp:false}); add for your com change loginand setlogin
const updateView = (lbl)=>{
  switch (lbl) {
    case "login":
      setLogin({ ...login, disp: true });
      break;
    case "navbar":
      setNavbar({ ...navbar, disp: true });
      break;
    case "agentstatus":
      setAgentStatus({ ...agentstatus, disp: true });
      break;
    case "sidemenu":
      setSideMenu({ ...sidemenu, disp: true });
      break;
    case "dialpad":
      setDialpad({ ...dialpad, disp: true });
      break;
    case "stickyNotes":
      setStickyNotes({ ...stickyNotes, disp: true });
      break;  
    case "weather":
      setWeather({ ...weather, disp: true });
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
        case "navbar":
          setNavbar({pos:{ x: data.x, y: data.y },exp:true,disp: true});
          break;
        case "agentstatus":
          setAgentStatus({pos:{ x: data.x, y: data.y },exp:true,disp: true});
          break;
        case "sidemenu":
          setSideMenu({pos:{ x: data.x, y: data.y },exp:true,disp: true});
          break;
        case "dialpad":
          setDialpad({pos:{ x: data.x, y: data.y },exp:true,disp: true});
          break;
        case "stickyNotes":
          setStickyNotes({pos:{ x: data.x, y: data.y },exp:true,disp: true});
          break;
        case "weather":
          setWeather({pos:{ x: data.x, y: data.y },exp:true,disp: true});
          break;
        default:
          console.log('TBD');
          break;
      }
    } 
  };

  return (
    <>
    { step === 0 ?
      <div className="App">
     <button className="addScreen" onClick={()=>setScreen(screen+1)}>Add New Screen</button>
     <div className="vl"><label className="paddingleft">Screen 1</label></div>
     {screen > 0 && <div className="v2"><label className="paddingleft">Screen 2</label></div>}
     {screen > 1 && <div className="v3"><label className="paddingleft">Screen 3</label></div>}
      <div id="mySidenav" className="sidenav">
      {login.disp && <p>Login </p>}
      <Draggable
        key="1"
        defaultClassName="limitWidth"
        defaultPosition={login.pos}
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'login' });
        }}
        onStart={()=>{
          updateView('login');
        }}
      >
        <div>
        <Login expanded={login.exp}></Login>
        </div>
      </Draggable>
      {navbar.disp && <p>NavBar </p>}
      <Draggable
        key="2"
        defaultClassName="limitWidth"
        defaultPosition={navbar.pos}
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'navbar' });
        }}
        onStart={()=>{
          updateView('navbar');
        }}
      >
        <div>
        <Navbar expanded={navbar.exp}></Navbar>
        </div>
      </Draggable>
      {agentstatus.disp && <p>Agent Status </p>}
      <Draggable
        key="3"
        defaultClassName="limitWidth"
        defaultPosition={agentstatus.pos}
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'agentstatus' });
        }}
        onStart={()=>{
          updateView('agentstatus');
        }}
      >
        <div>
        <AgentStatus expanded={agentstatus.exp}></AgentStatus>
        </div>
      </Draggable>
      {sidemenu.disp && <p>Side Menu </p>}
      <Draggable
        key="4"
        defaultClassName="limitWidth"
        defaultPosition={sidemenu.pos}
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'sidemenu' });
        }}
        onStart={()=>{
          updateView('sidemenu');
        }}
      >
        <div>
        <SideMenu expanded={sidemenu.exp}></SideMenu>
        </div>
      </Draggable>
      {dialpad.disp && <p>DialPad </p>}
      <Draggable
        key="5"
        defaultClassName="limitWidth"
        defaultPosition={dialpad.pos}
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'dialpad' });
        }}
        onStart={()=>{
          updateView('dialpad');
        }}
      >
        <div>
        <Dialpad expanded={dialpad.exp}></Dialpad>
        </div>
      </Draggable>  
      {stickyNotes.disp && <p>Sticky Notes </p>}
      <Draggable
        key="6"
        defaultClassName="limitWidth"
        defaultPosition={stickyNotes.pos}
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'stickyNotes' });
        }}
        onStart={()=>{
          updateView('stickyNotes');
        }}
      >
        <div>
        <StickyNotes expanded={stickyNotes.exp}></StickyNotes>
        </div>
      </Draggable>
      <p>Digital </p>
      <p>Email </p>
      <p>SMS </p>
      <p>Commitments </p>
      {weather.disp && <p>Weather Widget</p>}
      <Draggable
        key="7"
        defaultClassName="limitWidth"
        defaultPosition={weather.pos}
        onStop={(e, data) => {
          updatePos(data, 1, { type: 'weather' });
        }}
        onStart={()=>{
          updateView('weather');
        }}
      >
        <div>
        <Weather expanded={weather.exp}></Weather>
        </div>
      </Draggable>
      <button className="export">Export App</button>
      {/* <button className="flow1" onClick={()=>setStep(1)}>Start Login Flow</button>
      <button className="home-flow" onClick={()=>setStep(2)}>Start Home Flow</button> */}
    </div>
      </div>
      : step === 1 ? <DemoComp1 /> : step === 2 ? <DemoHomeComp /> : ""
    
    }

    </>
  );
}

export default App;
