import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from './Loader';
import { getUser } from '../redux/users/actions';
import { makeGetUserById } from '../redux/users/selectors';
import sampleData from '../redux/sampleData';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import './UserItem.css';

const { USER_DATA } = sampleData;

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autoHideDuration: 1000,
      message: 'Copied to the clipboard',
      snackBarOpen: false,
      popoverOpen: false,
    };
  }


  handlePopoverClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handlePopoverRequestClose = () => {
    this.setState({
      popoverOpen: false,
    });
  };


  handleSnackBarClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      snackBarOpen: true,
    });
  };

  handleSnackBarRequestClose = () => {
    this.setState({
      snackBarOpen: false,
    });
  };


  copyToClipboard = (input) => {
    const el = document.createElement('textarea');
    el.value = input;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  handleCopyClick = (event, input) => {
    this.handleSnackBarClick(event);
    this.copyToClipboard(input);
  };


  render() {
    const { user, profileObj } = this.props;
    const loading = user === undefined;


    // Commented out to speed up testing. Uncomment for final version.
    if (loading) {
      return <Loader type="bars" color="#333" width={32} height={32} />;
    }

    const { name, email, google_tok } = user;

    const emailBody = "Hi " + name.split(" ")[0] + ",\n I'd like to buy your book!"


    return (
      <div className="user_box">
        <div className="user_info">
          <h4>Seller: {name}</h4>
          {/*`${email}`*/}
        </div>
        {(profileObj.googleId === google_tok)
          ?
          <CardActions>
            <RaisedButton label="Delete" secondary={true} />
          </CardActions>
          :
          <CardActions style={{ "padding-left": "0px" }}>
            <RaisedButton label="Buy" primary={true} onClick={this.handlePopoverClick} style={{ float: 'right' }} />
            <Popover
              open={this.state.popoverOpen}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={this.handlePopoverRequestClose}
            >
              <div>
                <h3 style={{ padding: '5px', margin: '5px' }}> Great! Send them an email </h3>
                <TextField
                  readOnly
                  disabled={false}
                  defaultValue={email}
                  floatingLabelText="Seller's Email"
                  style={{ padding: '5px' }}
                  onFocus={(event) => event.target.select()}
                />
                <FlatButton style={{ padding: '0px' }}
                  icon={<i className="material-icons">assignment</i>}
                  label="Copy"
                  labelPosition="after"
                  onClick={(event) => { this.handleCopyClick(event, email) }}
                />
                <br />

                <TextField
                  readOnly
                  defaultValue={emailBody}
                  floatingLabelText="Premade Email Body"
                  style={{ padding: '5px' }}
                  onFocus={(event) => event.target.select()}
                />
                <FlatButton style={{ padding: '0px' }}
                  icon={<i className="material-icons">assignment</i>}
                  label="Copy"
                  labelPosition="after"
                  onClick={(event) => { this.handleCopyClick(event, emailBody) }}
                />
                <br />
                <Snackbar
                  open={this.state.snackBarOpen}
                  message={this.state.message}
                  autoHideDuration={this.state.autoHideDuration}
                  onRequestClose={this.handleSnackBarRequestClose}
                />
              </div>
            </Popover>
          </CardActions>}
      </div>
    );
  }
}

export default UserItem;
