import React, { Component } from 'react';
import ListingFeed from './ListingFeed';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './BookItem.css';

class BookItem extends Component {

  render() {
    const { title, authors, industryIdentifiers, listing_ids, thumbnail } = this.props;

    return (
      <Card style={{'marginBottom': '1vh'}}>
        <div className="book_container">
          <img src={thumbnail} style={ {'paddingLeft': '10px', 'paddingTop': '10px', width: '15%', height: '10%' }} alt="pic" />
          <div className="info_box">
            <h2>{title}</h2>
            <h4>{authors}</h4>
          </div>
        </div>
        <CardHeader
          subtitle={'View Listings'}
          actAsExpander={true}
          showExpandableButton={true}
          style={{'textAlign': 'right'}}
        />
        <ListingFeed expandable={true} listingIds={listing_ids} />
      </Card>
    );
  }
}

export default BookItem;
