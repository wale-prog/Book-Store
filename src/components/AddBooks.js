import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/';
import { addbook } from '../redux/books/asyncActions';
import './Addbooks.css';

const AddBooks = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: '',
    author: '',
    category: '',
    item_id: '',
  });

  const handleKeydown = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
      category: 'Economy',
      item_id: uuidv4(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.title.trim() && input.author.trim()) {
      dispatch(addbook(input)).then((data) => data);
    }
    setInput({
      title: '',
      author: '',
    });
  };

  return (
    <div>
      <div className="line" />
      <div className="form-div">
        <p className="add-book">ADD NEW BOOK</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Book title"
            name="title"
            required
            value={input.title}
            onChange={handleKeydown}
          />
          <input
            type="text"
            placeholder="Book author"
            name="author"
            required
            value={input.author}
            onChange={handleKeydown}
          />
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};
export default AddBooks;
