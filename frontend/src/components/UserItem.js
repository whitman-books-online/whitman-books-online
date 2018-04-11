import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from './Loader';
import { getUser } from '../redux/users/actions';
import { makeGetUserById } from '../redux/users/selectors';
import sampleData from '../redux/sampleData';

const { USER_DATA } = sampleData;

class UserItem extends Component {
  componentDidMount() {
    const { getUser, userId } = this.props;
    getUser(userId);
  }

  render() {
    const { user } = this.props;
    const loading = user === undefined;

    if (loading) {
      return <Loader type="bars" color="#333" width={32} height={32} />;
    }

    const { name, email } = user;

    return (
      <h5>{`${name}, ${email}`}</h5>
    );
  }
}

const makeMapStateToProps = () => {
  const getUserById = makeGetUserById();
  const mapStateToProps = (state, props) => {
    return {
      user: getUserById(state, props),
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUser }, dispatch);

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(UserItem));
