import React from "react";
import "./App.css";
import weather from "./assets/weather/weather.png";
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function Weather(props) {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'e4c22397cb52b0c9539e00eea1a048f7',
        lat: '48.137154',
        lon: '11.576124',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (<>

        {props.expanded ?
            <div className="sidenavs">
                <ReactWeather
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="en"
                    locationLabel="Munich"
                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                    showForecast
                />
            </div> : <p>Weather widget</p>
        }
    </>);
}

export default Weather;
