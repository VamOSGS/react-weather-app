import React from 'react';

class Search extends React.Component{
    constructor (props) {
        super(props);
        this.state = {newCity: ""}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            newCity: event.target.value
        } );
     console.log(event.target.value)

    }

    render() {
        return (
            <div className="Search" >
                <form>
                    <input onChange={this.handleChange}
                           value={this.state.newCity}
                           type="text"
                           placeholder="Search for other City"
                           noValidate/>
                </form>
            </div>
        )
    }
}

export default Search;