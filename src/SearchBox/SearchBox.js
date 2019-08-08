import React, {Component} from 'react';
import './SearchBox.css'

// get  props and set up how the searchbox UI should look since this is the last comp in the tree
//we can set up local state here since this  is the last comp and no other comp needs to access the state
//state is the user text input
//create a onSubmitForm method to change the state just like in the app where we created UpdateState
//submitform will get the updated state and pass it backwards all the way to App.js

class SearchBox extends Component {
    state = {
        search: "" //follow "search" all the way back to App.js, this is used in the base URL to get resource from the goog API 
    }
    onSubmitForm = (e) => { // when form is submitted upDateState is the new state (current state "") which was captured in onChange
        e.preventDefault();
        this.props.upDateState(this.state.search) 
    }

    render() {
        return (
            <form onSubmit= {this.onSubmitForm} className="SearchBox">
                <label htmlFor="search">Search:</label>
                <input type="text" name="search" id="search" value={this.state.search} //input displays what is in "value" value=state
                onChange = {(event) => this.setState({search: event.target.value})}placeholder="type name of book" />
                {/*onChange method to capture change in input, changes the state, by changing value of search which then triggers onSubmit when form is sent  */}
                <button >Search</button>
            </form>
        )
    }
    
}

export default SearchBox
