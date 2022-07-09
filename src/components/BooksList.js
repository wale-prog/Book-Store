/* eslint-disable */
import React, { useState } from "react";
import Book from "./Book";
import AddBooks from "./AddBooks";

const BooksList = () => {
  const bookslist = [
    {
      title: "Battleship",
      author: "Peter Berg",
      id: 1,
    },
    {
      title: "Eat, pray, love",
      author: "Ryan Murphy",
      id: 2,
    },
    {
      title: "Doctor strange",
      author: "Sam Raimi",
      id: 3,
    },
  ];

  const [books, setBooks] = useState(bookslist)

  const handleAddBooks = (title, author) => {
    const newBook = {
      title,
      author,
      id: bookslist.length,
    };
    setBooks([...books, newBook])
  };

  return (
    <div>
      {books.map((item) => (
        <Book key={item.id} List={item} />
      ))}
      <AddBooks handleAddBooks={handleAddBooks} />
    </div>
  );
};

export default BooksList;
