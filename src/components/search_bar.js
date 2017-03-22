// /**
//  * Created by Marcin on 18.03.2017.
//  */
import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return(
            <div>
                <input
                    value = {this.state.term}
                    onChange = {event => this.setState({term: event.target.value })}
                />
            </div>
        );
    }

    // render() {
    //     return <input onChange={event => console.log(event.target.value)} />;
    // }

    // onChangeInput(e) {
    //     console.log(e.target.value);
    // }
}

export default SearchBar;
