import React, { Component } from 'react';
import ListingFeed from './ListingFeed';
import Paper from 'material-ui/Paper';
import './BookItem.css';

class BookItem extends Component {

  render() {
    console.log(this.props);
    const { title, author, industryIdentifiers, listingIds, imageLinks } = this.props;

    return (
      <Paper zDepth={1}>
        <div className="book_container">
          {//<img src={imageLinks.thumbnail} alt="picture of book" />}
          }
          <h3>{title}</h3>
          <h4>{author}</h4>
        </div>
        <ListingFeed listingIds={listingIds} />
      </Paper>
    );
  }

}

export default BookItem;
