import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCity: "",
            send: false,
            newTemp: "",
            country_code: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            newCity: event.target.value
        });
        console.log(event.target.value)

    }
    handleSubmit(event) {
        event.preventDefault();
        const apiUrl = `https://api.wunderground.com/api/8e654d5abe58444d/conditions/q/UK/${this.state.newCity}.json`;
        console.log(apiUrl);
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    newTemp:  data.current_observation.temp_c,
                    send: true
                });
                console.log(this.state)
            })
    }

    render() {
        const {send, newCity,   newTemp} = this.state;
        return (
            <div className="Search">
                <p>{newCity} {newTemp}<span>&deg;c</span></p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={newCity}
                        type="text"
                        placeholder="Search for other City"
                        noValidate/>
                </form>
            </div>
        )
    }
}

export default Search;