import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Navigation';
import Login from './Login';
import Profile from './Profile';
import Exchange from './Exchange';
import Sell from './Sell';
import auth from './auth';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Navigation />
            <Switch>
              <Route
                path="/login"
                component={Login}
              />
              <PrivateRoute
                path="/profile"
                component={Profile}
              />
              <PrivateRoute
                path="/exchange"
                component={Exchange}
              />
              <PrivateRoute
                path="/sell"
                component={Sell}
              />
              <Redirect from="/" to="/exchange" />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: RouteComponent, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        auth.isAuthenticated() ? (
          <RouteComponent {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
      );
    }}
  />
);

export default App;
