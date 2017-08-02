import React, { Component } from 'react';
import './css/App.css';
import './css/wu-icons-style.css';
import WeatherDetails from './components/WeatherDetails';

class App extends Component {
    state = {
        city: '',
        country_code: '',
        temperature: '',
        icon: '',
        fetching: true
    }

    componentDidMount() {
        this.fetchIP();
    }
    fetchIP = () => {
        fetch('https://freegeoip.net/json/')
            .then(response => response.json())
            .then(({ country_code,city}) => this.fetchWeatherData( country_code, city))
            .catch(error => console.error());
    }

    fetchWeatherData = (country_code ,city)=> {
        const apiKey = "8e654d5abe58444d";
        console.log( country_code, city )
        const apiUrl = `https://api.wunderground.com/api/${apiKey}/conditions/q/${country_code}/${city}.json`;

        console.log(apiUrl)
        fetch(apiUrl )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    city,
                    temperature: data.current_observation.temp_c,
                    icon: 'wu wu-white wu-128 wu-'+data.current_observation.icon,
                    fetching: false
                })
            })
    }
    render() {
        const {fetching,  city, temperature, icon} = this.state;
        return fetching ?
            <div className="App"><div className="loader"></div></div>
            :
            <div className="App">
                <WeatherDetails icon={icon} city={city} temperature={temperature}/>
            </div>
    }
}

export default App;