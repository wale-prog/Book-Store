/* eslint-disable */
import React, { useState } from "react";
import { useDispatch } from "react-redux/";
import { addbook } from "../redux/books/books";
import "./Addbooks.css";

const AddBooks = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: "",
    author: "",
  });

  const handleKeydown = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.title.trim() && input.author.trim()) {
      dispatch(addbook(input));
    }
    setInput({
      title: '',
      author: ''
    })
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        required
        value={input.title}
        onChange={handleKeydown}
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        required
        value={input.author}
        onChange={handleKeydown}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default AddBooks;
