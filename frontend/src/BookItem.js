import React, { Component } from 'react';
import Feed from './Feed';
import ListingItem from './ListingItem';

class BookItem extends Component {
  render() {
    const { title, author, listings } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <Feed endpoint="/listings" query={{ listings }} ItemComponent={ListingItem} />
      </div>
    );
  }
}

export default BookItem;