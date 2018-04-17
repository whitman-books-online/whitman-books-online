import { createSelector } from 'reselect';

const getBookList = state => state.booksReducer.bookList;

// get the ISBN-13 from the book
const getBookISBN = (state, props) => props.industryIdentifiers;

const getUserId = (state, props) => props.userId;

// get a booklist from given ISBN
export const makeGetBookListByISBN = () =>
  createSelector(
    [getBookList, getBookISBN],
    (bookList, bookISBN) => {
      const bookListByISBN = Object.keys(bookList)
        .filter(key => bookISBN.includes(key))
        .reduce((obj, key) => {
          obj[key] = bookList[key];
          return obj;
        }, {});
      return bookListByISBN;
    },
  );

/*
// get a booklist from given user ID
export const makeGetBookListByUser = () =>
  createSelector(
    [getBookList, getUserId],
    (bookList, userId) => {
      const bookListByUser = Object.keys(bookList)
        .filter(key => userId === key)
        .reduce((obj, key) => {
          obj[key] = bookList[key];
          return obj;
        }, {});
      return bookListByUser;
    }
  );
  */
