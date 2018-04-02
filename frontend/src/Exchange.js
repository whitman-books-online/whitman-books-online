import React, { Component } from 'react';
import Feed from './Feed';
import BookItem from './BookItem';

class Exchange extends Component {
  render() {
    return (
      <div>
        <h1>Exchange</h1>
        <Feed endpoint="/books" query={{}} ItemComponent={BookItem} />
      </div>
    );
  }
}

export default Exchange;
