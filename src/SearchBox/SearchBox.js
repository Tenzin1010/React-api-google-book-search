import React, {Component} from 'react';
import './SearchBox.css'

// Static version 
// get file props and set up how the searchbox UI should look since this is the last comp in the tree

class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                   <label htmlFor="search">Search:</label>
                   <input type="text" name="search" id="search" placeholder="type name of book" />
                  <button>Search</button>
               </div>
        )
    }
    
}

export default SearchBox
