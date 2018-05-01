import React, { Component } from 'react';
import Page from './Page';
import BookFeed from './BookFeed';
import Search from './Search';
import SortField from './SortField';
import Filters from './Filters';
import './Exchange.css'
import logo from './logo.png';

class Exchange extends Component {
  render() {
    return (
      <Page>
        <div className='heading'>
          <img src={logo} style={ {'paddingLeft': '10px', width: '10%', height: '10%' }} alt='logo'/>
          <h1 style={{'paddingBottom':'2vh', paddingLeft:'1vw'}}>Exchange</h1>
        </div>
        <hr style={{'marginBottom': '2vh'}}/>
        <Search />
        <br />
        <SortField />
        <BookFeed />
      </Page>
    );
  }
}

export default Exchange;
