import React from 'react';
import Search from './Search'


function WeatherDetails({city, temperature, icon}) {
    return (
        <div className="WeatherDetails">
            <Search />
            <i className={icon}></i>
            <div className="city">{city}</div>
            <div className="temperature">{temperature}<span>&deg;c</span> </div>
        </div>
    )
}

export default WeatherDetails;