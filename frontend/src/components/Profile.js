import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserList } from '../redux/users/actions';
import { getUserById } from '../redux/users/selectors';
import Page from './Page';
import { logout } from '../redux/auth/actions';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import './Profile.css';
import Paper from 'material-ui/Paper';
import ListingFeed from './ListingFeed';

class Profile extends Component {
  componentDidMount() {
    const { user, profileObj, getUserList } = this.props;
    const { googleId } = profileObj;
    getUserList([googleId]);
  }

  render() {
    const {
      isAuthenticated,
      profileObj,
      user,
      logout,
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

    console.log(this.props);

    return (
      <Page>
        <div className="container">
          <Paper zDepth={1} style={{ width: '100%' }} className="container">
            <div className="box">
              <Avatar
                className="picture"
                src={imageUrl}
                size="6vw"
              />
            </div>
            <div className="box">
              <h1>{`${givenName} ${familyName}`}</h1>
              <h3>{email}</h3>
            </div>
            <div className="box" style={{ float: 'right' }}>
              <RaisedButton
                style={{ float: 'right' }}
                label="Sign Out"
                onClick={logout}
              />
            </div>
          </Paper>
        </div>
        <h1 className="listing-header">Your Listings</h1>
        <p className="listing-header">Books you are selling go here.</p>
        {user &&
          <ListingFeed showTitle listingIds={user.listing_ids} />
        }
      </Page>
    );
  }
}

const makeMapStateToProps = () => {
  const mapStateToProps = (state, props) => {
    const { profileObj, isAuthenticated } = state.authReducer;
    return {
      user: getUserById(state, props),
      profileObj,
      isAuthenticated,
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logout, getUserList }, dispatch);

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(Profile));
