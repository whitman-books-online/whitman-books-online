import React, { Component } from 'react';
import Page from './Page';
import BookFeed from './BookFeed';
import Search from './Search';

class Exchange extends Component {

  render() {
    return (
      <Page>
        <h1>Exchange</h1>
        <Search/>
        <BookFeed query={{}} />
      </Page>
    );
  }
}

export default Exchange;
