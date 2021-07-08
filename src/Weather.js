import React from "react";
import "./App.css";
import weather from "./assets/weather/weather.png";

function Weather(props) {
    return (<>

        {props.expanded ?
            <div className="sidenavs">
                Enter Zip For Weather :<input></input>
                <img alt="weather"
                    height="150px"
                    width="300px"
                    src={weather}>
                </img>
            </div> : <p>Weather widget</p>
        }
    </>);
}

export default Weather;
