import React, {useState} from "react";
import "./App.css";

function DemoHomeComp() {
    const [step, setStep] = useState(1);
    return (<>
        {
            step === 1 ?
                <div >
                    <img alt="loading"
                        onClick={()=>setStep(2)} className="home-navbar"
                        src={require('./assets/Home/TopNavBar.PNG')}></img>
                </div> :
            step === 2 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(3)} className="side-menu"
                    src={require('./assets/Home/SideMenu.PNG')}></img>
            </div> :
            step === 3 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(4)} className="agent-status"
                    src={require('./assets/Home/AgentStatus.png')}></img>
            </div> :
            step === 4 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(5)} className="home-main"
                    src={require('./assets/Home/HomeMain.PNG')}></img>
            </div>
            : ""     
            
        }
            </>);
}

export default DemoHomeComp;
