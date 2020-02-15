import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import venuesReducer from './reducers/venues_reducer'
import menuReducer from './reducers/menu_reducer'

const reducers = combineReducers({
  venues: venuesReducer,
  menu: menuReducer
});

const initialState = {
  venues: [],
  menu: {}
};

const middlewares = applyMiddleware(reduxPromise, logger);


import Router from './router'

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, initialState, middlewares)}>
      <Router />
    </Provider>
    ,root);
}

