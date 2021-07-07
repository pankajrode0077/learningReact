import React, { useState } from "react";
import "./App.css";
import SideMenuImg from '../src/assets/Home/Side-Menu.png';

function SideMenu(props) {
    const [step, setStep] = useState(0);

    return (<>
    {props.expanded ?
                <div className="App">
                    <img alt="loading" className='imageSize' src={SideMenuImg}></img>
                </div> :
            <div>Side Menu</div>
        }
    </>
    );
}

export default SideMenu;