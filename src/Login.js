import React, { useState } from "react";
import "./App.css";

function Login(props) {
    const [step, setStep] = useState(0);
    return (<>
        {props.expanded ?
            step === 0 ?
                <div >
                    <img alt="loading"
                        onClick={()=>setStep(1)}
                        height="450px"
                        width="22%"
                        src={process.env.PUBLIC_URL +"/Login-1.jpg"}></img>
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
