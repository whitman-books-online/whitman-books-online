import React, { Component } from 'react';
import UserItem from './UserItem';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../redux/users/actions';
import { getUserById } from '../redux/users/selectors';
import sampleData from '../redux/sampleData';
import Loader from './Loader';
import { Card, CardHeader } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import './ListingItem.css';

class ListingItem extends Component {
  render() {
    const { showTitle, bookTitle, price, condition, userId, user, profileObj, listing_id } = this.props;
    console.log(this.props);
    return (
      <Paper style={{ margin: '1vh' }}>
        {showTitle && <h2>{bookTitle}</h2>}
        <div className='price_cond'>
          <div className='price_box'>
            {/*<h3 style={{color:'#58ab43'}}>${price}</h3>*/}
            ${price}
          </div>
          <div className='cond_box'>
            <h4>{condition}</h4>
          </div>
        </div>
        <div style={{ 'paddingTop': '1vh', 'paddingLeft': '1vh' }}>
          <UserItem user={user} profileObj={profileObj} listingId={listing_id} />
        </div>
      </Paper>
    );
  }
}

const makeMapStateToProps = () => {
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
