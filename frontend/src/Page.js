import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'blue' }}>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
