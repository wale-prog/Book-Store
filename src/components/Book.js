import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/books';

function Book({ List: { title, author, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(delBook(id));

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
  id: null,
};

Book.propTypes = {
  List: PropTypes.instanceOf(Object).isRequired,
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
};

export default Book;
