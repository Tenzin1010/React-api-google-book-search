import  React, {Component}  from 'react'
import BookItem from '../BookItem/BookItem'

// static version 
// get file props from BookApp.js. Map the file pass the mapped items to BookItem. Once mapped display the complete list. 

class BookList extends Component {
    render() {
        const list = this.props.books.map((book, key) => <BookItem {...book} key={key} />)
        return (
            <div className="BookList">
                {list}
            </div>

        )
    }
}

export default BookList