import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSort, changeSortFail } from '../redux/search/actions';

  class SortField extends Component{

    handleChange = (event, index, value) => {

      //This is kind of embarrassing design and definitely in need of refactor at some point
      if (value != this.props.listings.sort) {
        this.props.changeSort(value);

        var dest_base = this.props.listings.urlDest;
        //var dest_base = `http://127.0.0.1:5000/`;

        //first GET request to get listing objects from listings_ids and a sortfield
        var urlDest = dest_base + 'listings/' + this.props.listings.ids + "+" + value;
        var requestIds = new XMLHttpRequest ();
        requestIds.open('GET', urlDest);
        requestIds.responseType = "json";
        var listingObjs;
        requestIds.onload = function() {
          listingObjs = requestIds.response;
        }

        //parse listing objects for a list of google tokens
        var google_tokens = "";
        for (var i=0; i<listingObjs["google_tokens"].length; i++){
          google_tokens = google_tokens + listingObjs["google_tokens"][i] +",";
        }
        google_tokens = google_tokens.slice(-1);
        console.log(google_tokens);

        //third GET request using google tokens to get user objects
        urlDest = dest_base + "userlist/"+google_tokens;
        var requestUsers = new XMLHttpRequest ();
        requestUsers.open('GET', urlDest);
        requestUsers.responseType = "json";
        requestUsers.onload = function() {
          var userObjs = requestUsers.response;
        }

      }
      else {
        this.props.changeSortFail(value);
      }
    }

    handleSearch = (event) =>{
      
    }

    render(){

      return(
        <div>
          <SelectField
            floatingLabelText="Sort By"
            value={this.props.listings.sort}
            onChange={this.handleChange}
            >
            <MenuItem value={"price"} primaryText="Price"/>
            <MenuItem value={"condition"} primaryText="Condition" />
          </SelectField>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    const listings = state.searchReducer;
    return listings;
  };

  const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeSort, changeSortFail }, dispatch);

    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SortField));
