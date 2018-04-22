import sampleData from '../sampleData';

const { BOOK_DATA } = sampleData;
const POST_BOOK_ENDPOINT = 'http://127.0.0.1:5000/book/';
const GET_BOOK_ENDPOINT = 'http://127.0.0.1:5000/booklist/';

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

export function getBookList() {
  return (dispatch, getState) => {
    const state = getState();
    const searchValue = state.searchReducer.books.searchValue || '_';
    const urlDest = GET_BOOK_ENDPOINT + searchValue;
    const requestBooks = new XMLHttpRequest();
    requestBooks.open('GET', urlDest);
    requestBooks.responseType = 'json';
    requestBooks.send(urlDest);
    requestBooks.onload = () => {
      const bookObjs = requestBooks.response;
      const bookList = bookObjs.books;
      dispatch(getBookListSuccess(bookList));
    };
  };
}
