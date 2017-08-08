import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCity: "",
            country: "",
            send: false,
            val: '',
            icon2: '',
            sending: false,
            newTemp: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleChange(event) {
        this.setState({
            send: false,
            sending: true,
            val: event.target.value
        }, () => {
            const url2 = `https://api.wunderground.com/api/8e654d5abe58444d/conditions/q/${this.state.val}.json`;
            // console.log(url2)
            fetch(url2)
                .then((response) => response.json())
                .then((data2) => {
                    this.setState({
                        country: data2.response.results[0].country_iso3166,
                        newCity: data2.response.results[0].city
                    })
                })
                .then(setTimeout(() => {
                    if (this.state.val !== '') {
                        console.log('send')
                        this.handleSend();
                    }
                }, 2000))
                .catch(error => console.error());
        });
    }

    handleSend() {
        console.log(this.state.country)
        const url = `https://api.wunderground.com/api/8e654d5abe58444d/conditions/q/${this.state.country}/${this.state.newCity}.json`;
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    newTemp: data.current_observation.temp_c,
                    icon2: 'wu wu-white wu-32 wu-'+data.current_observation.icon,
                    val: '',
                    send: true
                });
            })
            .catch(error => console.error());
    }

    render() {
        const {newCity, val, newTemp, send, sending, icon2} = this.state;
        return (
            <div className="Search">
                {sending ? <div>{send ? <p><i className={icon2}></i>{newCity} {newTemp}<span>&deg;c</span></p> :
                    <div className="loader"></div>}</div> : <span></span>}
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={val}
                    placeholder="Search for other City"
                    noValidate/>
            </div>
        )
    }
}

export default Search;