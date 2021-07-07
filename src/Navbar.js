import React, { useState } from "react";
import "./App.css";
import TopNavBarImg from '../src/assets/Home/Top-Navbar.png';

function Navbar(props) {
    const [step, setStep] = useState(0);

    return (<>
    {props.expanded ?
                <div className="App">
                    <img alt="loading" className='imageSize' src={TopNavBarImg}></img>
                </div> :
            <div>Navbar</div>
        }
    </>
    );
}

export default Navbar;