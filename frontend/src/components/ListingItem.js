import React, { Component } from 'react';
import UserItem from './UserItem';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../redux/users/actions';
import { makeGetUserById } from '../redux/users/selectors';
import sampleData from '../redux/sampleData';
import Loader from './Loader';
import {Card, CardHeader} from 'material-ui/Card';


class ListingItem extends Component {

  componentDidMount() {
    const { getUser, userId } = this.props;
    getUser(userId);
  }

  render() {
    const { price, condition, userId, user, profileObj } = this.props;

    return (
		  <Card>
		    <CardHeader
		      title={`$${price}, ${condition}`}
		      subtitle={<UserItem user={user} profileObj={profileObj} />}
		      actAsExpander={false}
		      showExpandableButton={false}
		      style={{padding: '10px'}}
		    />
		  </Card>
    );
  }
}

const makeMapStateToProps = () => {
  const getUserById = makeGetUserById();
  const mapStateToProps = (state, props) => {
    return {
      user: getUserById(state, props),
      profileObj: state.authReducer.profileObj,
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUser }, dispatch);

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(ListingItem));
