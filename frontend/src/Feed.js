import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Loader from './Loader';
import sampleData from './sampleData';

const { bookData, listingData } = sampleData;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: null,
      loading: false,
    };
  }

  componentDidMount() {
    const { endpoint, query } = this.props;
    this.getList(endpoint, query);
  }

  getList = (endpoint, query) => {
    this.setState({ loading: true });
    // fetch('https://whitman-books-online/{endpoint}', {
    //   method: 'GET',
    //   body: JSON.stringify({
    //     query,
    //   }),
    // }).then((response) => {
    //   const responseJson = response.json();
    //   return responseJson;
    // }).then((itemList) => {
    //   this.setState({ itemList });
    // }).catch((err) => {
    //   console.log(err);
    // });
    setTimeout(() => {
      if (endpoint === '/books') {
        this.setState({ itemList: bookData });
      } else if (endpoint === '/listings') {
        const listingMap = query.listings.map(
          listingId => listingData[listingId],
        );
        this.setState({ itemList: listingMap });
      }
      this.setState({ loading: false });
    }, 2000);
  };

  render() {
    const { ItemComponent } = this.props;
    const { itemList, loading } = this.state;


    if (!itemList) {
      if (loading) {
        return <Loader type="bars" color="#333" />;
      }
      return null;
    }

    return (
      <Paper zDepth={1}>
        <List>
          {Object.keys(itemList).map((key) => {
            const item = itemList[key];
            return (
              <ItemComponent key={key} {...item} />
            );
          })}
        </List>
      </Paper>

    );
  }
}

export default Feed;
