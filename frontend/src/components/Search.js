import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePrice, changePriceFail, changeCondition, changeConditionFail,
  changeSearchValue, changeSearchValueFail, changeListingPage, changeListingPageFail,
  changeListingLength, changeListingLengthFail  } from '../redux/search/actions';



  class Search extends Component{

    render(){
      return(
        <SearchBar
        value={this.props.books.searchValue}
        onChange={(newValue) => this.props.changeSearchValue(newValue)}
        onRequestSearch={() => console.log(this.props.books.searchValue)}
        style={{
          margin: '0 auto',
          maxWidth: 800
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
  bindActionCreators({ changePrice, changePriceFail, changeCondition, changeConditionFail,
    changeSearchValue, changeSearchValueFail, changeListingPage, changeListingPageFail,
    changeListingLength, changeListingLengthFail  }, dispatch);

    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
