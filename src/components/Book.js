import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

function Book({ List: { title, author } }) {
  return (
    <div>
      <div className="main">
        <h2>{ title }</h2>
        <h3>{ author }</h3>
      </div>
      <ul className="list">
        <li>Comments</li>
        <li>
          <button type="button">Remove</button>
        </li>
        <li>Edit</li>
      </ul>
    </div>
  );
}

Book.defaultProps = {
  List: null,
};

Book.propTypes = {
  List: null,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
