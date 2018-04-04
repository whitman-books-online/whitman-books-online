import React, { Component } from 'react';
import Loader from './Loader';
import sampleData from '../redux/sampleData';

const { USER_DATA } = sampleData;

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: null,
        email: null,
      },
      loading: false,
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    this.getUser(userId);
  }

  getUser = (userId) => {
    this.setState({ loading: true });
    // Asynchronous request to server
    setTimeout(() => {
      const user = USER_DATA[userId];
      this.setState({ user, loading: false });
    }, 2000);
  }

  render() {
    const { loading, user } = this.state;
    const { name, email } = user;

    if (!name || !email) {
      if (loading) {
        return <Loader type="bars" color="#333" />;
      }
      return null;
    }

    return (
      <h5>{`${name}, ${email}`}</h5>
    );
  }
}

export default UserItem;