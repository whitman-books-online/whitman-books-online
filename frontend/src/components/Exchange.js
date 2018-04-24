import React, { Component } from 'react';
import Page from './Page';
import BookFeed from './BookFeed';
import Search from './Search';
import SortField from './SortField';
import Filters from './Filters';

class Exchange extends Component {
  render() {
    return (
      <Page>
        <h1>Exchange</h1>
        <Search />
        <br />
        <SortField />
        <BookFeed />
      </Page>
    );
  }
}

export default Exchange;
