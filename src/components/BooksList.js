/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import AddBooks from "./AddBooks";

const BooksList = () => {
  const bookCollection = useSelector(state => state.books);
  
  return (
    <div>
      {bookCollection.map((item) => (
        <Book key={item.id} List={item} />
      ))}
      <AddBooks />
    </div>
  );
};

export default BooksList;
