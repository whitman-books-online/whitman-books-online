import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './Page.css';

class Page extends Component {
  render() {
    return (
      <Paper className='Page-Container' zDepth={2}>
        {this.props.children}
      </Paper>
    );
  }
}

export default Page;
