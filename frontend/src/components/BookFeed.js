import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Feed from './Feed';
import BookItem from './BookItem';
import { getBookList } from '../redux/books/actions';
import sampleData from '../redux/sampleData';

const { BOOK_DATA } = sampleData;

class BookFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const { getBookList } = this.props;
    getBookList({});
  }

  render() {
    const { loading } = this.state;
    const { bookList } = this.props;
    console.log("FUCK", bookList);

    return (
      <Feed loading={loading} feedList={bookList} FeedItem={BookItem} />
    );
  }
}

const mapStateToProps = (state) => {
  const { bookList } = state.booksReducer;
  return { bookList };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBookList }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookFeed));
