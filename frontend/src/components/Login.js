import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../redux/auth/actions';
import './Login.css';

const CLIENT_ID = '317596678792-2ekdkdrdlgsqdaudaag7t7m7qf4m0b17.apps.googleusercontent.com';

class Login extends Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { invalid, isAuthenticated, login } = this.props;

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div className="Login-Container">
        <h1>Whitman Books Online</h1>
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          onFailure={login}
        />
        {invalid ?
          <div>
            <hr />
            <h4>Invalid Login</h4>
          </div>
         :
         null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { invalid, isAuthenticated } = state.authReducer;
  return { invalid, isAuthenticated };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ login }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
