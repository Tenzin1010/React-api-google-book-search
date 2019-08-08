import React from 'react';

import './App.css';
import BookApp from './BookApp/BookApp'

//set up temp file as Props to use for now and pass it to BookApp
//Set up state with empty array of books because that is what will be displayed eventually on the UI
//pass state as props to BookApp(child) 
//method is created which will be used to update state eventually and pass it down as props too 
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  // update the state using user input you get from search bar 
  upDateState(search) { //upDateState gets passed all the way to SearchBox
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDScZCEj8pDfevdi4hB8DiU1n5CdXGBI6s`;
        fetch(url)
        .then(response => response.json())
         .then( data => { console.log(data)
         
          const books = data.items.map(item => { 
            return {
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors,
              description: item.searchInfo.textSnippet
            }
          })
          // const books = data.items.map(item => ({title: item.volumeInfo.title})) // same as above return {title: item.volumeInfo.title}
          console.log(books);
          this.setState({   //this now becomes the new state from line 67 const books
            books
          });
        });
  }
  render() {
    return (
      <BookApp 
        books={this.state.books}    //pass the entire state to BookApp
        upDateState={(search) => this.upDateState(search)}/> // we get back value from userinput from searchBox.js in this line this.props.upDateState(this.state.search)
        //user entry will return to app from searchBox from this, and will update state which then gets passed back to bookList that displays the list of books with the new state
        //the books props gets handed down till bookitem that gets the props in the form of title, author, description and uses that to display the results
        )
  }
}
export default App