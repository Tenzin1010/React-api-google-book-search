import React from 'react';
import './BookItem.css'

// static version 
// get mapped file props from BookList.js. Set up how individual item UI should look. 

function BookItem(props) {
        return (
            <div className="BookItem">
                <ul className="BookItem__ul">
                    <li className="BookItem__li">
                        <img src={props.image} alt="this is a pic"/>
                        <h3>Title: {props.title}</h3>
                        <h3>Author: {props.author}</h3>
                        <h3>Price: {props.price}</h3>
                        <h3>Description: {props.description}</h3>
                    </li>
                </ul>
            </div>
        )
    
}

export default BookItem;