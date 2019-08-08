import React, {Component} from 'react';
import './BookApp.css'
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';

// get props file from App.js & pass it to BookList.js & SearchBar.js since they are the children of App.js
//search bar will get props updateState b'coz user interaction will update the state and that has to be passed back to App eventually
//Booklist gets the final state after it gets updated by SearchBar which will be the list of books

class BookApp extends Component {
    render() {
        return (
            <div className="BookApp">
                <div className="App__heading">
                    <h1>Google Book Search</h1>
                </div>
            <SearchBar upDateState={this.props.upDateState}/>
            <BookList books={this.props.books} />
        </div>
        )
    }
}
export default BookApp;

