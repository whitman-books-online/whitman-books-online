import React, { Component}  from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { withRouter } from 'react-router';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router-dom';
import './Navigation.css';

const profileIcon = <FontIcon className="material-icons">face</FontIcon>;
const exchangeIcon = <FontIcon className="material-icons">swap_horiz</FontIcon>;
const sellIcon = <FontIcon className="material-icons">add</FontIcon>;

class Navigation extends Component { 

    state = {
      selectedIndex: this.props.selectedIndex,
    };

    select = (index) => {
      
      this.setState({selectedIndex: index});
      
      switch (index) {
        case 0:
          this.props.history.push("/profile");
          break;

        case 1:
          this.props.history.push("/exchange");
          break;

        case 2:
          this.props.history.push("/sell");
          break;
      }
    }
      
    render() {

      return (

          <div className="Bottom-Navigation">
            <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="Profile"
                icon={profileIcon}
                onClick={() => this.select(0)}
              />
              <BottomNavigationItem
                label="Exchange"
                icon={exchangeIcon}
                onClick={() => this.select(1)}
              />
              <BottomNavigationItem
                label="Sell"
                icon={sellIcon}
                onClick={() => this.select(2)}
              />
            </BottomNavigation>
          </Paper>
        </div>
      );
    }

}

export default withRouter(Navigation);