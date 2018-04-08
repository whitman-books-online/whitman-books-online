import React, { Component } from 'react';
import Page from './Page';
import BookFeed from './BookFeed';
import SearchBar from 'material-ui-search-bar';

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  render() {
    return (
      <Page>
        <h1>Exchange</h1>

        <SearchBar
          value={this.state.value}
          onChange={(newValue) => this.setState({ searchValue: newValue })}
          onRequestSearch={() => console.log(this.state.searchValue)}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />

        <BookFeed query={{}} />
      </Page>
    );
  }
}

export default Exchange;
