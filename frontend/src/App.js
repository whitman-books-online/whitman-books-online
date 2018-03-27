import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import { Typography } from 'material-ui';
import Navigation from './Navigation';
import Login from './Login';
import Profile from './Profile';
import Market from './Market';
import Sell from './Sell';
import auth from './auth';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null,
    }
  }

  render() {
    console.log(auth);
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route
              path="/login"
              render={(props) => <Login {...props} auth={auth} />}
            />
            <PrivateRoute
              path="/profile"
              component={Profile}
            />
            <PrivateRoute
              path="/market"
              component={Market}
            />
            <PrivateRoute
              path="/sell"
              component={Sell}
            />
            <Redirect from="/" to="/market" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.profile ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default App;
