import React, {Component} from 'react';
import './BookApp.css'
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';

//static version 
// get props file from App.js & pass it to BookList.js & SearchBar.js since they are the children of App.js
class BookApp extends Component {
    render() {
        return (
            <div className="BookApp">
                <div className="App__heading">
                    <h1>Google Book Search</h1>
                </div>
            <SearchBar />
            <BookList files={this.props.files} />
        </div>
        )
    }
}
export default BookApp;

