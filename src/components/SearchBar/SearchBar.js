/**
 * Created by brucekendrick on 9/23/17.
 */

import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.handleTermChange = this.handleTermChange.bind(this);
        this.searchThis = this.searchThis.bind(this);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    searchThis() {
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <a onClick={this.searchThis}>SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;




