import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Feed from './Feed';
import BookItem from './BookItem';
import { getBookList } from '../redux/books/actions';
import sampleData from '../redux/sampleData';
import { makeGetBookListByISBN } from '../redux/books/selectors';
import RaisedButton from 'material-ui/RaisedButton';

const { BOOK_DATA } = sampleData;

class BookFeed extends Component {
  componentDidMount() {
    const { query, getBookList, bookList } = this.props;
    if (!Object.keys(bookList).length) {
      getBookList();
    }
  }

  render() {
    const { bookList, getBookList } = this.props;
    const loading = !Object.keys(bookList).length;

    return (
      <div>
        <RaisedButton label="Refresh" primary={true} onClick={() => getBookList()} />
        <Feed loading={loading} feedList={bookList} FeedItem={BookItem} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { bookList } = state.booksReducer;
  return { bookList };
  /*
  const getBookListByISBN = makeGetBookListByISBN();
  const mapStateToProps = (state, props) => {
    return {
      bookList: getBookListByISBN(state, props),
    };
  };
  return mapStateToProps;*/
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBookList }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookFeed));
