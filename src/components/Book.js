import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/asyncActions';
import 'react-circular-progressbar/dist/styles.css';

function Book({ List: book }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteBook(book.item_id));
  const randomNumber = () => Math.floor(Math.random() * 100);
  const rand = randomNumber();
  const chapter = Math.floor((rand / 100) * 110);

  return (
    <div className="card">
      <div>
        <div className="main">
          <p className="category">{book.category}</p>
          <h2 className="title">{book.title}</h2>
          <h3 className="author">{book.author}</h3>
        </div>
        <ul className="list">
          <li>Comments</li>
          <li>
            <button onClick={handleDelete} type="button">
              Remove
            </button>
          </li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="progress">
        <div className="circular-progress-bar">
          <CircularProgressbar
            className="progress-bar"
            value={rand}
          />
        </div>
        <div className="percentage">
          <p>
            {rand}
            %
          </p>
          <p>Completed</p>
        </div>
      </div>
      <div className="ver-line" />
      <div className="progress-info">
        <p>CURRENT CHAPTER</p>
        <p>
          Chapter
          {' '}
          {chapter}
        </p>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
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
