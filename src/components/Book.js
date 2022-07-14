/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../redux/books/asyncActions';

function Book({ List: { title, author, item_id, category } }) {
  const dispatch = useDispatch();
  const input = {title, author, item_id, category}
  const handleDelete = () => dispatch(deleteBook(input.item_id))

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

Book.defaultProps = {
  title: null,
  author: null,
  item_id: null,
};

Book.propTypes = {
  List: PropTypes.instanceOf(Object).isRequired,
  author: PropTypes.string,
  title: PropTypes.string,
  item_id: PropTypes.number,
};

export default Book;
