import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Feed from './Feed';
import ListingItem from './ListingItem';
import { getListingList } from '../redux/listings/actions';
import { makeGetListingListByIds } from '../redux/listings/selectors';

class ListingFeed extends Component {
  componentDidMount() {
    const { getListingList, listingIds, listingList } = this.props;
    if (!Object.keys(listingList).length) {
      getListingList(listingIds);
    }
  }

  render() {
    console.log(this.props);
    const { listingList, showTitle } = this.props;
    const loading = !Object.keys(listingList).length;

    return (
      <div>
        <Feed showTitle={showTitle} loading={loading} feedList={listingList} FeedItem={ListingItem} />
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getListingListByIds = makeGetListingListByIds();
  const mapStateToProps = (state, props) => {
    return {
      listingList: getListingListByIds(state, props),
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getListingList }, dispatch);

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(ListingFeed));
