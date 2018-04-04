import React, { Component } from 'react';
import Feed from './Feed';
import ListingItem from './ListingItem';
import sampleData from '../redux/sampleData';

const { LISTING_DATA } = sampleData;

class ListingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingList: null,
      loading: false,
    };
  }

  componentDidMount() {
    const { listingIds } = this.props;
    this.getListingList(listingIds);
  }

  getListingList = (listingIds) => {
    this.setState({ loading: true });
    // Asynchronous request to server
    setTimeout(() => {
      const listingMap = listingIds.map(
        listingId => LISTING_DATA[listingId],
      );
      this.setState({ listingList: listingMap });
      this.setState({ loading: false });
    }, 2000);
  };

  render() {
    const { loading, listingList } = this.state;

    return (
      <Feed loading={loading} feedList={listingList} FeedItem={ListingItem} />
    );
  }
}

export default ListingFeed;
