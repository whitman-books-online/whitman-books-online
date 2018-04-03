import React, {
  Component
} from 'react';

import validator from 'validator';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import Page from './Page'

var isbn = require("node-isbn")

class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      book: null,
      condition: '',
      price: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleConditionChange = (event, index, condition) => {
    this.setState({condition});
  }


  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value,
    })
  }


  handleClick = (e) => {
    e.preventDefault();


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
    return (
      <Page>

        <h1> Sell your book:</h1>
          {/*Input isbn and fetch information, need some formatting.*/}
          <TextField id = "isbn-field"
            floatingLabelText = "Input your book's ISBN here:"
            value = {this.state.value}
            errorText = {this.state.errorText}
            onChange = {this.handleChange}/>

            <FlatButton primary = {true} label = "Confirm"
              onClick = {this.handleClick}/>


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
                        Publisher:  {book.publisher}<br/>
                        Published Date:  {book.publishedDate}<br/>
                        <br/>
                          {book.description}
                        </CardText>
                      </Card>
                      <br/>


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
                                <br/>

                                  <TextField
                                    id = "price-field"
                                    floatingLabelText = "Input your desired price:"
                                    price = {this.state.price}
                                    onChange = {this.handlePriceChange}/>



                                    <FlatButton primary = {true} label = "Submit"/>



                                    </div>
                                  }
                                </Page>
                              );
                            }
                          }

                          export default Sell;
