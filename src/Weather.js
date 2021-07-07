import React from "react";
import "./App.css";
import weather from "./assets/weather/weather.png";

function Weather(props) {
    return (<>
                {props.expanded ?
                        <div className="App">
                            <img alt="weather"
                                height="150px"
                                width="300px"
                                src={weather}>
                            </img>
                        </div> : <div>Weather widget</div>
                }
            </>);
}

export default Weather;
