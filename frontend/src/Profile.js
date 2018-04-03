import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Page from './Page';
import auth from './auth';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  signout = () => {
    auth.signout();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <Page>
        <h1>Profile</h1>
        <h2>
          {`${auth.profile.givenName} ${auth.profile.familyName}`}
        </h2>
        <h3>
          {auth.profile.email}
        </h3>
        <img src={auth.profile.imageUrl} alt="profileImage" />
        <button onClick={this.signout}>Signout</button>
      </Page>
    );
  }
}

export default Profile;
