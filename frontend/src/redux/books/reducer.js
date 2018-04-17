const initialState = {
  bookList: {},
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'GET_BOOK_SUCCESS':
      return {
        ...state,
        bookList: {
          ...state.bookList,
          [payload.bookId]: payload.book,
        },
      };
    case 'GET_BOOK_FAIL':
      return {
        ...state,
      };
    case 'GET_BOOK_LIST_SUCCESS':
      return {
        ...state,
        bookList: payload,
      };
    case 'GET_BOOK_LIST_FAIL':
      return {
        ...state,
      };
    default:
      return state;
  }
};
