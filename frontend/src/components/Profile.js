import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from './Page';
import { logout } from '../redux/auth/actions';

class Profile extends Component {
  render() {
    const { isAuthenticated, profileObj, logout } = this.props;
    const { givenName, familyName, email, imageUrl} = profileObj;

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <Page>
        <h1>Profile</h1>
        <h2>{`${givenName} ${familyName}`}</h2>
        <h3>{email}</h3>
        <img src={imageUrl} alt="profileImage" />
        <br />
        <button onClick={logout}>Signout</button>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  const { profileObj, isAuthenticated } = state.authReducer;
  return { profileObj, isAuthenticated };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logout }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
