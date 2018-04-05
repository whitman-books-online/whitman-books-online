import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import authReducer from '../redux/auth/reducer';
import booksReducer from '../redux/books/reducer';
import listingsReducer from '../redux/listings/reducer';
import usersReducer from '../redux/users/reducer';
import Home from './Home';

// Create a history of your choosing
// (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Storing state between sessions
const persistedState = localStorage.getItem('authState') ? JSON.parse(localStorage.getItem('authState')) : {};

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    authReducer,
    booksReducer,
    listingsReducer,
    usersReducer,
    router: routerReducer,
  }),
  persistedState,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(middleware),
  ),
);

// Subscribing store to localstorage
store.subscribe(() => {
  const authState = {
    authReducer: store.getState().authReducer,
  };
  const serializedState = JSON.stringify(authState);
  localStorage.setItem('authState', serializedState);
});

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider>
            <Home />
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
