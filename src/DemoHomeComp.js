import React, {useState} from "react";
import "./App.css";

function DemoHomeComp() {
    const [step, setStep] = useState(1);
    return (<>
        {
            step === 1 ?
                <div >
                    <img alt="loading"
                        onClick={()=>setStep(2)}
                        height="45px"
                        width="85%"
                        src={require('./assets/Home/Top-Navbar.png')}></img>
                </div> :
            step === 2 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(3)}
                    height="500px"
                    width="90%"
                    src={require('./assets/Home/Side-Menu.png')}></img>
            </div> :
            step === 3 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(4)}
                    height="45px"
                    width="85%"
                    src={require('./assets/Home/Agent-Status.png')}></img>
            </div> :
            step === 4 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(5)}
                    height="500px"
                    width="85%"
                    src={require('./assets/Home/Home-1.png')}></img>
            </div>
            : ""     
            
        }
            </>);
}

export default DemoHomeComp;
