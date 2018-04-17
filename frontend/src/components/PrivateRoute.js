import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    const { isAuthenticated, component: Component, ...props } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated ?
            <Component {...props} />
            :
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }}
            />
        }
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.authReducer;
  return { isAuthenticated };
};

export default connect(mapStateToProps)(PrivateRoute);
