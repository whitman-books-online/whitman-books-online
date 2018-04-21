import React, { Component } from 'react';
import Page from './Page';
import BookFeed from './BookFeed';
import Search from './Search';

class Exchange extends Component {

  render() {
    return (
      <Page>
        <div style={{'padding-bottom': '2vh'}}>
          <h1>Exchange</h1>
        </div>
        <div style={{'padding-bottom': '2vh'}}>
          <Search/>
        </div>
        <BookFeed query={{}} />
      </Page>
    );
  }
}

export default Exchange;
