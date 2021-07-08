import React, { useState } from "react";
import "./App.css";
import TopNavBarImg from '../src/assets/Home/TopNavBar.PNG';

function Navbar(props) {
    const [step, setStep] = useState(0);

    return (<>
    {props.expanded ?
                <div className="sidenavs">
                    <img alt="loading" className="home-navbar" src={TopNavBarImg}></img>
                </div> :
            <p>Navbar</p>
        }
    </>
    );
}

export default Navbar;