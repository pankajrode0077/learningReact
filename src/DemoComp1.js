import React, {useState} from "react";
import "./App.css";
import Login from "./Login";

function DemoComp1() {
    const [step, setStep] = useState(1);
    return (<>
        {
            step === 1 ?
                <div >
                    <Login expanded={true} changestep={()=>setStep(2)}></Login>
                </div> :
            step === 2 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(3)}
                    height="500px"
                    width="70%"
                    src={require('./assets/dialpad/OBCall1.png')}></img>
            </div> :
            step === 3 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(4)}
                    height="500px"
                    width="70%"
                    src={require('./assets/dialpad/OBCall2.png')}></img>
            </div> :
            step === 4 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(5)}
                    height="500px"
                    width="70%"
                    src={require('./assets/dialpad/OBCall3.png')}></img>
            </div> :
            step === 5 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(6)}
                    height="500px"
                    width="70%"
                    src={require('./assets/dialpad/OBCall4.png')}></img>
            </div> :
            step === 6 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(7)}
                    height="500px"
                    width="70%"
                    src={require('./assets/dialpad/OBCall5.png')}></img>
            </div>
            
            
            : ""     
            
        }
            </>);
}

export default DemoComp1;
