import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSort, changeSortFail } from '../redux/search/actions';
import { getBookList } from '../redux/books/actions';

class SortField extends Component {
  handleChange = (event, index, value) => {
    const { listings, changeSort, changeSortFail, getBookList } = this.props;
    const { sort } = listings;
    //This is kind of embarrassing design and definitely in need of refactor at some point
    if (value != sort) {
      changeSort(value);
      getBookList();
    }
    else {
      changeSortFail(value);
    }
  }

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Sort By"
          value={this.props.listings.sort}
          onChange={this.handleChange}
        >
          <MenuItem value={"price"} primaryText="Price" />
          <MenuItem value={"condition"} primaryText="Condition" />
        </SelectField>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const listings = state.searchReducer;
  return listings;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeSort, changeSortFail, getBookList }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SortField));
