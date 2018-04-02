import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import auth from './auth';
import './Login.css';

const CLIENT_ID = '317596678792-2ekdkdrdlgsqdaudaag7t7m7qf4m0b17.apps.googleusercontent.com';

class Login extends Component {
  state = {
    redirect: false,
    invalid: false,
  };

  login = (response) => {
    auth.signin(response);
    if (auth.isAuthenticated()) {
      this.setState({ redirect: true, invalid: false });
    } else {
      this.setState({ invalid: true });
    }
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={from} />;
    }

    return (
      <div className="Login-Container">
        <h1>Whitman Books Online</h1>
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={this.login}
          onFailure={this.login}
        />
        {this.state.invalid ?
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

export default Login;
