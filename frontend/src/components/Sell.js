import React, { Component } from 'react';
import validator from 'validator';
import isbn from 'node-isbn';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Page from './Page';
import Loader from './Loader';
import authReducer from '../redux/auth/reducer';
import { getIdToken } from '../redux/auth/selectors';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Sell.css'
import logo from './logo.png';



class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isbnValue: '',
      book: null,
      condition: '',
      price: '',
      priceError: '',
      isbnError: '',
      isbnButtonDisabled: true,
      priceButtonDisabled: true,
      loading: false,

    };
  }



  handleIsbnChange = (event) => {
    const isbnValue = event.target.value;
    if (validator.isISBN(isbnValue)) {
      this.setState({
        isbnValue,
        isbnError: '',
        isbnButtonDisabled: false,
      });
    } else {
      this.setState({
        isbnError: 'This is not a valid ISBN.',
        isbnValue,
        isbnButtonDisabled: true,
      });
    }
  }

  handleConditionChange = (event, index, condition) => {
    this.setState({
      condition,
    });
  }

  handlePriceChange = (event) => {
    const price = event.target.value;
    if (validator.isCurrency(price)) {
      this.setState({
        price,
        priceError: '',
        priceButtonDisabled: false,
      });
    } else {
      this.setState({
        price,
        priceError: 'This is not a valid price',
        priceButtonDisabled: true,
      });
    }
  }


  handleIsbnClick = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    isbn.resolve(this.state.isbnValue, (err, book) => {
      if (err) {
        this.setState({
          loading: false,
        });
      } else {
        this.setState({
          book,
          loading: false,
        });
      }
    });
  }

  handleIsbnEnterKey = (e) => {
    // console.log(`Pressed keyCode ${ev.key}`);
    if (e.key === 'Enter' && this.state.isbnButtonDisabled === false) {
      this.handleIsbnClick(e);
    }
  }

  handlePriceEnterKey = (e) => {
    if (e.key === 'Enter' && this.state.priceButtonDisabled === false) {
      this.handleSubmitClick(e);
    }
  }


  handleSubmitClick = (e) => {
    e.preventDefault();
    //BOOK TO BACKEND
    //${this.state.book.industryIdentifiers[0].identifier}
    const requestURL = `http://127.0.0.1:5000/book/${this.state.isbnValue}`;
    const request = new XMLHttpRequest();
    request.open('POST', requestURL);
    request.responseType = "json";
    const { idToken } = this.props;
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", `Bearer ${idToken}`);
    request.send(JSON.stringify(this.state.book));
    request.onload = function () {
      const bookData = request.response;
    }

    //LISTING TO BACKEND
    const i = this.state.book.industryIdentifiers.length - 1;
    const requestURL2 = `http://127.0.0.1:5000/listing/${this.state.book.industryIdentifiers[i].identifier}`;
    const request2 = new XMLHttpRequest();
    request2.open('POST', requestURL2);
    request2.responseType = "json";
    request2.setRequestHeader("Content-Type", "application/json");
    request2.setRequestHeader("Authorization", `Bearer ${idToken}`);
    const body = JSON.stringify({
      price: parseFloat(this.state.price),
      condition: this.state.condition,
      status: "selling",
      google_tok: this.props.googleId,
    });
    request2.send(body);
    request2.onload = function () {
      const listingData = request2.reponse;
    }
  }

  render() {
    const { loading, book } = this.state;

    return (
      <Page>
        <h1> Sell your book:</h1>
        <TextField
          floatingLabelText="Input your book's ISBN here:"
          value={this.state.isbnValue}
          errorText={this.state.isbnError}
          onChange={this.handleIsbnChange}
          onKeyPress={this.handleIsbnEnterKey}
          errorStyle={{
            float: 'left',
          }}
        />

        <FlatButton
          primary
          label="Confirm"
          onClick={this.handleIsbnClick}
          disabled={this.state.isbnButtonDisabled}
        />

        {loading &&
          <Loader />
        }

        {book &&
          <div>
            <Card>
              <CardHeader
                title={book.title}
                subtitle={book.authors}
                avatar={book.imageLinks && book.imageLinks.thumbnail}
                actAsExpander
                showExpandableButton
              />

              <CardText expandable>
                {book.publisher ? `Publisher: ${book.publisher}` : null}
                <br />
                {book.publishedDate ? `Published Date: ${book.publishedDate}` : null}
                {book.description}
              </CardText>
            </Card>

            <br />

            <SelectField
              floatingLabelText="Condition"
              value={this.state.condition}
              onChange={this.handleConditionChange}
            >
              <MenuItem value="Bad" primaryText="Bad" />
              <MenuItem value="Ehh" primaryText="Ehh" />
              <MenuItem value="Good" primaryText="Good" />
              <MenuItem value="New" primaryText="New" />
            </SelectField>

            <br />

            $&nbsp;
            <TextField
              floatingLabelText="Input your desired price:"
              value={this.state.price}
              onChange={this.handlePriceChange}
              onKeyPress={this.handlePriceEnterKey}
              errorText={this.state.priceError}
              errorStyle={{
                float: 'left',
              }}
            />
            <FlatButton
              primary
              label="Submit"
              disabled={this.state.priceButtonDisabled}
              onClick={this.handleSubmitClick}
            />
          </div>
        }
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  const { googleId } = state.authReducer.profileObj;
  const idToken = getIdToken(state);
  return { googleId, idToken };
};

export default withRouter(connect(mapStateToProps)(Sell));
