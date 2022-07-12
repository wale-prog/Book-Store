/* eslint-disable */
import React from 'react';
import './Book.css';
import { useDispatch } from 'react-redux'
import { delBook } from '../redux/books/books';

function Book({ List: { title, author, id} }) {

  const dispatch = useDispatch()  

  const handleDelete = () => {
    dispatch(delBook({
      id,
    }))
  }
  
  return (
    <div>
      <div className="main">
        <h2>{ title }</h2>
        <h3>{ author }</h3>
      </div>
      <ul className="list">
        <li>Comments</li>
        <li>
          <button onClick={handleDelete} type="button">Remove</button>
        </li>
        <li>Edit</li>
      </ul>
    </div>
  );
}


export default Book;
