import React, {
  Component
} from 'react';
import validator from 'validator';
import isbn from 'node-isbn';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Page from './Page'

class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isbn: '',
      book: null,
      condition: '',
      price: '',
      priceErrorText: '',
      isbnErrorText: '',
      isbnButtonOff: true,
      priceButtonOff: true,

    };
  }

  handleIsbnChange = (event) => {
    const isbn = event.target.value;
    if (validator.isISBN(isbn)) {
      this.setState({
        isbn,
        isbnErrorText: '',
        isbnButtonOff: false,
      })
    }
    else {
      this.setState({
        isbnErrorText: 'This is not a valid ISBN.',
        isbn,
        isbnButtonOff: true,
      })
    }
  }

  handleConditionChange = (event, index, condition) => {
    this.setState({ 
      condition 
    });
  }

  handlePriceChange = (event) => {
    const price = event.target.value
    if (validator.isCurrency(price))
      this.setState({
        price,
        priceErrorText: '',
        priceButtonOff: false,
      })
    else {
      this.setState({
        price,
        priceErrorText: 'This is not a valid price',
        priceButtonOff: true,
      })
    }
  }

  handleIsbnClick = (e) => {
    e.preventDefault();
    isbn.resolve(this.state.isbn, (err, book) => {
      if (err) {
        console.log("Book not found", err);
      } else {
        this.setState({
          book
        })
      }
    });
  }

  render() {
    const { book } = this.state;

    return (
      <Page>

        <h1> Sell your book:</h1>
        {/*Input isbn and fetch information, need some formatting.*/}
        <TextField 
          id="isbn-field"
          floatingLabelText="Input your book's ISBN here:"
          value={this.state.isbn}
          errorText={this.state.isbnErrorText}
          onChange={this.handleIsbnChange} 
        />

        <FlatButton 
          primary={true} 
          label="Confirm"
          onClick={this.handleIsbnClick}
          disabled={this.state.isbnButtonOff}
        />

        {book &&
          <div>
            <Card>
              <CardHeader
                title={book.title}
                subtitle={book.authors}
                avatar={book.imageLinks && book.imageLinks.thumbnail}
                actAsExpander={true}
                showExpandableButton={true}
              />

              <CardText expandable={true}>
                Publisher:  {book.publisher}
                <br />
                Published Date:  {book.publishedDate}
                <br />
                <br />
                {book.description}
              </CardText>
            </Card>
            <br />

            <SelectField
              floatingLabelText="Condition"
              value={this.state.condition}
              onChange={this.handleConditionChange}
            >
              <MenuItem value={"Poor"} primaryText="Poor" />
              <MenuItem value={"Used"} primaryText="Used" />
              <MenuItem value={"Like New"} primaryText="Like new" />
              <MenuItem value={"New"} primaryText="New" />
            </SelectField>
            <br />

            <TextField
              id="price-field"
              floatingLabelText="Input your desired price:"
              price={this.state.price}
              onChange={this.handlePriceChange}
              errorText={this.state.priceErrorText}
            />
            <FlatButton
              primary={true}
              label="Submit"
              disabled={this.state.priceButtonOff}
            />
          </div>
        }
      </Page>
    );
  }
}


export default Sell;
