import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Loader from './Loader';

class Feed extends Component {
  render() {
    const { loading, feedList, FeedItem } = this.props;


    if (!feedList) {
      if (loading) {
        return <Loader type="bars" color="#333" />;
      }
      return null;
    }

    return (
      <List>
        {Object.keys(feedList).map((item) => {
          const data = feedList[item];
          return (
            <FeedItem key={item} {...data} />
          );
        })}
      </List>
    );
  }
}

export default Feed;
