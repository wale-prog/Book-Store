import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DEL_BOOK = 'bookstore/books/DEL_BOOK';

const initialState = [];

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
