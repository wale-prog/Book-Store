import { ADD_ASYNC_BOOK, DELETE_ASYNC_BOOK, GET_ASYNC_BOOK } from './asyncActions';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ASYNC_BOOK: {
      return [...state, action.book];
    }
    case DELETE_ASYNC_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    case GET_ASYNC_BOOK: {
      return action.payload;
    }
    default: return state;
  }
};
export default bookReducer;

// export const addbook = (book) => ({
//   type: ADD_BOOK,
//   book,
// });

// export const delBook = (id) => ({
//   type: DEL_BOOK,
//   id,
// });
