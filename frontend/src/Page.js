import React, { Component } from 'react';
import Paper from 'material-ui/Paper';



class Page extends Component {

  render() {
    return (
        <Paper className='pageStyle' zDepth={2}>
         {this.props.children}
        </Paper>
    );
  }
}

export default Page;
