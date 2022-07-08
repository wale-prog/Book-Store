import React from 'react';
import './Addbooks.css';

const AddBooks = () => (
  <form className="form">
    <input type="text" placeholder="Title" name="title" />
    <input type="text" placeholder="Author" name="author" />
    <button type="submit">Submit</button>
  </form>
);
export default AddBooks;
