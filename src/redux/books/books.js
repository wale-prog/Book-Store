import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DEL_BOOK = 'bookstore/books/DEL_BOOK';

const initialState = [
  { title: 'Think Again', author: 'Adam Grant', id: uuidv4() },
  { title: 'The Power of Focus', author: 'Jack Canfield', id: uuidv4() },
  { title: 'The Psychology of Money', author: 'Morgan Housel', id: uuidv4() },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newBook = {
        id: uuidv4(),
        ...action.book,
      };
      return [...state, newBook];
    }
    case DEL_BOOK: {
      return state.filter((book) => book.id !== action.id);
    }
    default: return state;
  }
};

export const addbook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const delBook = (id) => ({
  type: DEL_BOOK,
  id,
});

export default bookReducer;
