import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSearchValue } from '../redux/search/actions';
import { getBookList } from '../redux/books/actions';



class Search extends Component {
  render() {
    const { getBookList, changeSearchValue, books } = this.props;
    const { searchValue } = books;

    return (
      <SearchBar
        value={searchValue}
        onChange={newSearchValue => changeSearchValue(newSearchValue)}
        onRequestSearch={() => getBookList()}
        style={{
          margin: '0 auto',
          maxWidth: 800,
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { books, listings } = state.searchReducer;
  return { books, listings };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    changeSearchValue,
    getBookList,
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
