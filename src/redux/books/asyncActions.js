// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux/';
import bookServices from '../../services/bookServices';

export const ADD_ASYNC_BOOK = 'bookstore/ADD_ASYNC_BOOK';
export const DELETE_ASYNC_BOOK = 'bookstore/DELETE_ASYNC_BOOK';
export const GET_ASYNC_BOOK = 'bookstore/GET_ASYNC_BOOK';

export const addbook = (input) => async (dispatch) => {
  try {
    const response = await bookServices.create({
      ...input,
    });
    dispatch({
      type: ADD_ASYNC_BOOK,
      payload: response.data,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await bookServices.remove(id);
    dispatch({
      type: DELETE_ASYNC_BOOK,
      payload: { id },
    });
  } catch (error) {
    console.log(error);
  }
};

const transform = (data) => {
  const arr = Object.entries(data);

  let result = [];
  arr.forEach((item) => {
    const itemId = item[0];
    const book = item[1][0];
    book.item_id = itemId;
    result = [...result, book];
  });
  return result;
};

export const getBooks = () => async (dispatch) => {
  const response = await bookServices.getAll();
  const data = transform(response.data);
  dispatch({
    type: GET_ASYNC_BOOK,
    payload: data,
  });
};

// export const getBooks = createAsyncThunk(
//   GET_ASYNC_BOOK,
//   async () => {
//     const response = await bookServices.getAll();
//     const data = transform(response.data);
//     console.log(data);
//     return data;
//   },
// );
