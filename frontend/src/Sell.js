import React, {
  Component
} from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

var isbn = require("node-isbn")

class Sell extends Component {


  constructor(props) {
    super(props);

    this.state = {
      value: '',
      book: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    alert('ISBN: ' + this.state.value)

    isbn.resolve(this.state.value, (err, book) => {
      if (err) {
        console.log('Book not found', err);
      } else {
        this.setState({
          book
        })
      }
    });
  }




  render() {
    const book = this.state.book;
    return ( <
      MuiThemeProvider >
      <
      h1 > Sell < /h1> <
      TextField id = "isbn-field"
      floatingLabelText = "Input your book's ISBN here:"

      value = {
        this.state.value
      }
      onChange = {
        this.handleChange
      }
      />

      <
      FlatButton primary = {
        true
      }
      label = "Confirm"
      onClick = {
        this.handleClick
      }
      />
      {/*If there is a book display information and price/condition */}
      {book &&
        <div>
        <h2>{book.title}</h2>
        <h3>{book.authors}</h3>
        <h4>{book.publisher}</h4>
        <h5>{book.publishedDate}</h5>
        <img src={book.imageLinks.thumbnail}/>
        </div>


      }
      </MuiThemeProvider>
    );
  }
}

export default Sell;
