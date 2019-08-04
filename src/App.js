import React from 'react';

import './App.css';
import BookApp from './BookApp/BookApp'


//static version
//set up temp file as Props to use for now and pass it to BookApp

const FILES = [
  {"image": "image1", "title": "some title 1", "author": "some author 1", "price": "$$some price 1", "description": "some description 1"},
  {"image": "image2", "title": "some title 2", "author": "some author 2", "price": "$$some price 2", "description": "some description 2"},
  {"image": "image3", "title": "some title 3", "author": "some author 3", "price": "$$some price 3", "description": "some description 3"},
  {"image": "image4", "title": "some title 4", "author": "some author 4", "price": "$$some price 4", "description": "some description 4"}
]

class App extends React.Component {
  render() {
    return (
      <BookApp files={FILES}/>
    )
  }
}
export default App

