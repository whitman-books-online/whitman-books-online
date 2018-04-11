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
        console.log('Book not found', err);
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
              <MenuItem value="Poor" primaryText="Poor" />
              <MenuItem value="Used" primaryText="Used" />
              <MenuItem value="Like New" primaryText="Like new" />
              <MenuItem value="New" primaryText="New" />
            </SelectField>

            <br />

            $
            <TextField
              floatingLabelText="Input your desired price:"
              value={this.state.price}
              onChange={this.handlePriceChange}
              errorText={this.state.priceError}
              errorStyle={{
                float: 'left',
              }}
            />
            <FlatButton
              primary
              label="Submit"
              disabled={this.state.priceButtonDisabled}
            />
          </div>
        }
      </Page>
    );
  }
}


export default Sell;
