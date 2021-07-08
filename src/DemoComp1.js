import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import AgentStatusImg from '../src/assets/Home/AgentStatus.png';
import AgentDispImg from '../src/assets/dialpad/dispo.png';
import StickyNotes from "./StickyNotes";
import SideMenuImg from '../src/assets/Home/SideMenu.PNG';
import Weather from './Weather';

function DemoComp1() {
    const [step, setStep] = useState(1);
    const [shLoad, setSHLoad] = useState(false);
    const [widgt, setWidgt] = useState(false);
    const keypressed = (e) => {
        console.log(e.key);
        switch (e.key) {
            case 'l':
                setStep(1);
                break;
            case 'd':
                setStep(2);
                break;
            case 'c':
                setStep(6);
                break;
            case 's':
                setSHLoad(true);
                setTimeout(() => { setStep(7); setSHLoad(false); }, 1000)
                break;
            case 'q':
                setSHLoad(true);
                setTimeout(() => { setStep(step + 1); setSHLoad(false); }, 1000)
                break;
            default:
                break;
        }
    }
    return (<>
        <input style={{ border: "none", "font-size": "5px " }} onKeyPress={keypressed}></input>
        {widgt &&  <div style={{ display: "grid" }} >
             <StickyNotes expanded={true}></StickyNotes>
             <Weather expanded={true}></Weather>
          </div> }
        {shLoad === true ?
            <div>
                <img alt="loading" class="loader-spinner"
                    src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/loader-spinner.png'></img>
            </div>
            :
            step === 1 ?
                <div >
                    <Login expanded={true} changestep={() => {
                        setSHLoad(true);
                        setTimeout(() => { setStep(2); setSHLoad(false); setWidgt(true) }, 1000)
                    }}></Login>
                </div> :
                step === 2 ?
                    <div style={{ display: "grid" }}>
                        <img alt="loading" width="300px" src={AgentStatusImg}></img>
                        <img alt="loading" className="side-menu" src={SideMenuImg}></img>
                        <img alt="loading"
                            onClick={() => setStep(3)}
                            height="500px"
                            width="300px"
                            src={require('./assets/dialpad/OBCall1.png')}></img>
                    </div> :
                    step === 3 ?
                        <div style={{ display: "grid" }}>
                            <img alt="loading" width="300px" src={AgentStatusImg}></img>
                            <img alt="loading"
                                onClick={() => setStep(4)}
                                height="500px"
                                width="300px"
                                src={require('./assets/dialpad/OBCall2.png')}></img>
                        </div> :
                        step === 4 ?
                            <div style={{ display: "grid" }}>
                                <img alt="loading" width="300px" src={AgentStatusImg}></img>
                                <img alt="loading"
                                    onClick={() => setStep(5)}
                                    height="500px"
                                    width="300px"
                                    src={require('./assets/dialpad/OBCall3.png')}></img>
                            </div> :
                            step === 5 ?
                                <div style={{ display: "grid" }}>
                                    <img alt="loading" width="300px" src={AgentStatusImg}></img>
                                    <img alt="loading"
                                        onClick={() => {
                                            setSHLoad(true);
                                            setTimeout(() => { setStep(6); setSHLoad(false); }, 1000)
                                        }}
                                        height="500px"
                                        width="300px"
                                        src={require('./assets/dialpad/OBCall4.png')}></img>
                                </div> :

                                step === 6 ?
                                    <div style={{ display: "grid" }} >
                                        <img alt="loading" width="300px" src={AgentStatusImg}></img>
                                        <img alt="loading"
                                            onClick={() => {
                                                setSHLoad(true);
                                                setTimeout(() => { setStep(8); setSHLoad(false); }, 1000)
                                            }}
                                            height="500px"
                                            width="300px"
                                            src={require('./assets/dialpad/OBCall5.png')}></img>
                                    </div> :
                                    step === 8 ?
                                        <div style={{ display: "grid" }} >
                                            <img alt="loading" width="300px" src={AgentStatusImg}></img>
                                            <img alt="loading"
                                                onClick={() => {
                                                    setSHLoad(true);
                                                    setTimeout(() => { setStep(6); setSHLoad(false); }, 1000)
                                                }}
                                                height="500px"
                                                width="300px"
                                                src={AgentDispImg}></img>
                                        </div> :
                                        ""

        }
    </>);
}

export default DemoComp1;
