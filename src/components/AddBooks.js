/* eslint-disable */

import React, { useState } from 'react';
import './Addbooks.css';

const AddBooks = (props) => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const handleKeydown = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(input.title.trim() && input.author.trim()){
      props.handleAddBooks(input.title, input.author);
      setInput({
        title: '',
        author: ''
      })
    }else {
      alert('Please input title and author')
    }    
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={input.title}
        onChange={handleKeydown}
        
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        value={input.author}
        onChange={handleKeydown}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default AddBooks;
