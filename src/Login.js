import React, { useState } from "react";
import "./App.css";
import Login1 from "./assets/login/Login1.png";

function Login(props) {
    const [step, setStep] = useState(0);
    return (<>
        {props.expanded ?
                <div className="sidenavs">
                    <img alt="loading"
                        onClick={()=>setStep(1)}
                        height="450px"
                        width="22%"
                        src={process.env.PUBLIC_URL +"/Login-1.jpg"}></img>
                </div> 
            :
            <p>Login</p>
        }
        {

        }
    </>
    );
}

export default Login;
