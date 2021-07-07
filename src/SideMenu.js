import React, { useState } from "react";
import "./App.css";
import SideMenuImg from '../src/assets/Home/Side-Menu.png';

function SideMenu(props) {
    const [step, setStep] = useState(0);

    return (<>
    {props.expanded ?
                <div className="sidenavs">
                    <img alt="loading" className="side-menu" src={SideMenuImg}></img>
                </div> :
            <p>Side Menu</p>
        }
    </>
    );
}

export default SideMenu;