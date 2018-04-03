import React, { Component } from 'react';
import ListingFeed from './ListingFeed';

class BookItem extends Component {
  render() {
    const { title, author, listingIds } = this.props;
    
    return (
      <div>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <ListingFeed listingIds={listingIds} />
      </div>
    );
  }
}

export default BookItem;