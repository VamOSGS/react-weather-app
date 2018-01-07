import React from 'react';
import '../css/index.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sending: false,
            open: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const { value } = this.TextField;
    }

    render() {
        const { open, sending } = this.state;
        return (
            <div className="Search">
                {
                    sending ?
                        <div className='loader'></div> :
                        null
                }
                {
                    open ?
                        <div className="info">
                            INFO
                        </div> :
                        null
                }
                <input
                    onChange={this.handleChange}
                    type="text"
                    ref={input => this.TextField = input}
                    placeholder="Search for other City"
                    noValidate />
            </div>
        )
    }
}

export default Search;