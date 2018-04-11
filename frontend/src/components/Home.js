import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navigation from './Navigation';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Profile from './Profile';
import Exchange from './Exchange';
import Sell from './Sell';

const privateRoutes = [
  {
    path: '/profile',
    main: Profile,
  },
  {
    path: '/exchange',
    main: Exchange,
  },
  {
    path: '/sell',
    main: Sell,
  },
];

class Home extends Component {
  render() {
    return (
      <div>
        {privateRoutes.map((route, index) => (
          <Route
            key={route.path}
            path={route.path}
            render={() => <Navigation selectedIndex={index} /> }
          />
        ))}
        <Switch>
          <Route
            path="/login"
            component={Login}
          />
          {privateRoutes.map(route => (
            <PrivateRoute
              key={route.path}
              path={route.path}
              component={route.main}
            />
          ))}
          <Redirect from="/" to="/exchange" />
        </Switch>
      </div >
    );
  }
}

export default Home;
