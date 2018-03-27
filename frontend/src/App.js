import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
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
    return (
      <Router>
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
