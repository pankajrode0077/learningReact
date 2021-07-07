import React, { useState } from "react";
import "./App.css";

function Login(props) {
    const [step, setStep] = useState(0);
    return (<>
        {props.expanded ?
            step === 0 ?
                <div className="App">
                    <img alt="loading"
                        onClick={()=>setStep(1)}
                        height="100px"
                        width="100px"
                        src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"></img>
                </div> :
                step === 1 ?
                    <p onClick={()=>setStep(2)} >Load image with username</p> :
                    <p>Load image with UN and Password</p>
            :
            <p>Login</p>
        }
        {

        }
    </>
    );
}

export default Login;
