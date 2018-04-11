import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from './Page';
import { logout } from '../redux/auth/actions';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import './Profile.css';
import Paper from 'material-ui/Paper';

class Profile extends Component {
  render() {
    const {
      isAuthenticated,
      profileObj,
      logout,
      userId,
    } = this.props;
    const {
      givenName,
      familyName,
      email,
      imageUrl,
      googleId,
    } = profileObj;

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <Page>
        <Paper class="container" zDepth={2}>
          <Avatar
            src={imageUrl}
            size={80}
          />
          <div class = "container_child">
            <h1>{`${givenName} ${familyName}`}</h1>
            <h3>{email}</h3>
          </div>
          <RaisedButton
            style={ {float: 'right'} }
            label="Sign Out"
            onClick={logout}
          />
        </Paper>
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
