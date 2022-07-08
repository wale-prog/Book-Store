import React from 'react';
import Book from './Book';
import AddBooks from './AddBooks';

const BooksList = () => {
  const bookslist = [
    {
      title: 'Battleship',
      author: 'Peter Berg',
      id: 1,
    },
    {
      title: 'Eat, pray, love',
      author: 'Ryan Murphy',
      id: 2,
    },
    {
      title: 'Doctor strange',
      author: 'Sam Raimi',
      id: 3,
    },
  ];

  return (
    <div>
      {bookslist.map((item) => <Book key={item.id} List={item} />)}
      <AddBooks />
    </div>

  );
};

export default BooksList;
