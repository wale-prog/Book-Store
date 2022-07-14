import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/asyncActions';

function Book({ List: book }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteBook(book.item_id));

  return (
    <div>
      <div className="main">
        <h2>{ book.title }</h2>
        <h3>{ book.author }</h3>
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
