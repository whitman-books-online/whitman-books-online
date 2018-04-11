import sampleData from '../sampleData';

const { BOOK_DATA } = sampleData;

export function getBookSuccess(bookId, book) {
  return {
    type: 'GET_BOOK_SUCCESS',
    payload: {
      bookId,
      book,
    },
  };
}

export function getBookFail() {
  return {
    type: 'GET_BOOK_FAIL',
  };
}

export function getBookListSuccess(bookList) {
  return {
    type: 'GET_BOOK_LIST_SUCCESS',
    payload: bookList,
  };
}

export function getBookListFail() {
  return {
    type: 'GET_BOOK_LIST_FAIL',
  };
}
export function fetchBook(bookId) {
  return (dispatch) => {
    setTimeout(() => {
      if (BOOK_DATA[bookId]) {
        const book = BOOK_DATA[bookId];
        dispatch(getBookSuccess(bookId, book));
      } else {
        dispatch(getBookFail());
      }
    }, 2000);
  };
}

export function getBook(bookId) {
  return (dispatch, getState) => {
    const state = getState();
    const { bookList } = state.bookReducer;
    if (bookList[bookId]) {
      const book = bookList[bookId];
      dispatch(getBookSuccess(book));
    } else {
      dispatch(fetchBook(bookId));
    }
  };
}

export function getBookList(query) {
  return (dispatch) => {
    setTimeout(() => {
      const bookList = BOOK_DATA;
      dispatch(getBookListSuccess(bookList));
    }, 2000);
  };
}
