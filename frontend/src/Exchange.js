import React, { Component } from 'react';
import Page from './Page';
import BookFeed from './BookFeed';

class Exchange extends Component {
  render() {
    return (
      <Page>
        <h1>Exchange</h1>
        <BookFeed />
      </Page>

    );
  }
}

export default Exchange;
