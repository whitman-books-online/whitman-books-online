import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/exchange">
              Exchange
            </Link>
          </li>
          <li>
            <Link to="/sell">
              Sell
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
