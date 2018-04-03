import React, { Component } from 'react';

class ListingItem extends Component {
  render() {
    const { price, condition } = this.props;

    return (
      <div>
        <h5>{`$${price}, ${condition}`}</h5>
      </div>
    );
  }
}

export default ListingItem;