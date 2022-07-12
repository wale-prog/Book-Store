const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const STATUS_COMPLETE = 'STATUS_COMPLETE';
const initialState = [];
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, 'Page Under Construction'];
    case STATUS_COMPLETE:
      return [...state, 'Page is now available'];
    default: return state;
  }
};
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export const statusComplete = () => ({
  type: STATUS_COMPLETE,
});

export default categoriesReducer;
