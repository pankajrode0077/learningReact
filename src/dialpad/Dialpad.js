import React, { useState } from "react";
import "../App.css";

import OBCall1  from '../assets/dialpad/OBCall1.png';
import OBCall2  from '../assets/dialpad/OBCall2.png';
import OBCall3  from '../assets/dialpad/OBCall3.png';

function Dialpad(props) {
    const [step, setStep] = useState(0);
    return (<>
        {props.expanded ?
            step === 0 ?
                <div className="App">
                    <img alt="loading" className='imageSize'
                        onClick={() => setStep(1)}
                        src={OBCall1}></img>
                </div> :
                step === 1 ?
                    <div onClick={() => setStep(2)}>
                        <img alt="loading" className='imageSize'
                            onClick={() => setStep(2)}
                            src={OBCall2}></img>
                    </div> :
                    <div onClick={() => setStep(2)} >
                        <img alt="loading" className='imageSize'
                            onClick={() => setStep(2)}
                            src={OBCall3}></img>
                    </div>
            :
            <p>Dialpad</p>
        }
        {

        }
    </>
    );
}

export default Dialpad;
