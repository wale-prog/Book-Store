import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBooks from './AddBooks';
import { getBooks } from '../redux/books/asyncActions';

const BooksList = () => {
  const bookCollection = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks()).then((data) => data);
  }, []);

  return (
    <div className="books-div">
      {bookCollection.map((item) => (
        <Book
          key={item.item_id}
          List={item}
        />
      ))}
      <AddBooks />
    </div>
  );
};

export default BooksList;
