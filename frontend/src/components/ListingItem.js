import React, { Component } from 'react';
import UserItem from './UserItem';

class ListingItem extends Component {
  render() {
    const { price, condition, userId } = this.props;

    return (
      <div>
        <h5>{`$${price}, ${condition}`}</h5>
        <UserItem userId={userId} />
      </div>
    );
  }
}

export default ListingItem;
