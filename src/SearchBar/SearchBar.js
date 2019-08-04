import React, {Component} from 'react';
import './SearchBar.css'
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

//Static version 
// set up h1 header & 
// get file props from BookApp.js & pass to SearchBox.js & FilterOptions.js
class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <SearchBox />
                <FilterOptions />
            </div>

        )
    }
}

export default SearchBar;
