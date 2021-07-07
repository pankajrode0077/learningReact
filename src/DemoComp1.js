import React, {useState} from "react";
import "./App.css";


function DemoComp1() {
    const [step, setStep] = useState(0);
    return (<>
        {
            step === 1 ?
                <div >
                    <img alt="loading"
                        onClick={()=>setStep(2)}
                        height="500px"
                        width="70%"
                        src={require('./assets/login/Login-1.png')}></img>
                </div> :
            step === 2 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(3)}
                    height="500px"
                    width="70%"
                    src={require('./assets/login/Login-2.png')}></img>
            </div> :
            step === 3 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(4)}
                    height="500px"
                    width="70%"
                    src={require('./assets/login/Login-3.png')}></img>
            </div> :
            step === 4 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(5)}
                    height="500px"
                    width="70%"
                    src={require('./assets/login/Login-4.png')}></img>
            </div> :
            step === 5 ?
            <div >
                <img alt="loading"
                    onClick={()=>setStep(6)}
                    height="500px"
                    width="70%"
                    src={require('./assets/login/Login-5.png')}></img>
            </div>
            
            
            : <button onClick={()=>setStep(1)}>Start Login Flow</button>     
            
        }
            </>);
}

export default DemoComp1;
