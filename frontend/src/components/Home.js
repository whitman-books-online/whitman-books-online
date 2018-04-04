import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Profile from './Profile';
import Exchange from './Exchange';
import Sell from './Sell';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            path="/login"
            component={Login}
          />
          <PrivateRoute
            exact
            path="/profile"
            component={Profile}
          />
          <PrivateRoute
            exact
            path="/exchange"
            component={Exchange}
          />
          <PrivateRoute
            exact
            path="/sell"
            component={Sell}
          />
          <Redirect from="/" to="/exchange" />
        </Switch>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const { invalid, isAuthenticated } = state.authReducer;
  return { invalid, isAuthenticated };
};

export default withRouter(connect(mapStateToProps)(Home));
