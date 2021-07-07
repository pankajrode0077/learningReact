import React, { useState } from "react";
import "./App.css";
import AgentStatusImg from '../src/assets/Home/Agent-Status.png';

function AgentStatus(props) {
    const [step, setStep] = useState(0);

    return (<>
    {props.expanded ?
                <div className="App">
                    <img alt="loading" className='imageSize' src={AgentStatusImg}></img>
                </div> :
            <div>Agent Status</div>
        }
    </>
    );
}

export default AgentStatus;