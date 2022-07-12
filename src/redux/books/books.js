/* eslint-disable */

const ADD_BOOK = "ADD_BOOK";
const DEL_BOOK = "DEL_BOOK";

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newBook = {
        id: state.length,
        title: action.book.title,
        author: action.book.author,
      };
      return [...state, newBook]
    }
    case DEL_BOOK: {
        const deleteBook = state.filter(book => book.id !== action.id);
        return [...state, ...[deleteBook]]
    }
    default: return state;
  }
};

export const addbook = (book) => ({
    type: ADD_BOOK,
    book,
})

export const delBook = (id)=> ({
    type: DEL_BOOK,
    id
})

export default bookReducer;
