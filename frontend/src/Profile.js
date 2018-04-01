import React, { Component } from 'react';
import Page from './Page';
import auth from './auth';

class Profile extends Component {

  render() {
    console.log(auth);
    return (
      <Page>
        <h1>Profile</h1>
        <h2>
          {auth.profile.givenName + ' ' +auth.profile.familyName}
        </h2>
        <h3>
          {auth.profile.email}
        </h3>
        <img src={auth.profile.imageUrl}/>
        <button onClick={auth.signout}>Signout</button>
      </Page>
    );
  }
}

export default Profile;
