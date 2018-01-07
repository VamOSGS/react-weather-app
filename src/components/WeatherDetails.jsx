import React from 'react';


function WeatherDetails({ city, temperature, icon }) {
    return (
        <div className="WeatherDetails">
            <i className={icon}></i>
            <div className="city">{city}</div>
            <div className="temperature"> {temperature}<span>&deg;c</span> </div>
        </div>
    )
}

export default WeatherDetails;