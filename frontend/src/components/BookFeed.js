import React, { Component } from 'react';
import Feed from './Feed';
import BookItem from './BookItem';
import sampleData from '../redux/sampleData';

const { BOOK_DATA } = sampleData;

class BookFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.getBookList();
  }

  getBookList = () => {
    this.setState({ loading: true });
    // Asynchronous request to server
    setTimeout(() => {
      this.setState({ bookList: BOOK_DATA });
      this.setState({ loading: false });
    }, 2000);
  };

  render() {
    const { loading, bookList } = this.state;

    return (
      <Feed loading={loading} feedList={bookList} FeedItem={BookItem}>
        <Feed loading={loading} feedList={bookList} FeedItem={BookItem} />
      </Feed>
    );
  }
}

export default BookFeed;
