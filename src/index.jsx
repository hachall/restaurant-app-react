import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import venuesReducer from './reducers/venues_reducer'
import menuReducer from './reducers/menu_reducer'
import mapReducer from './reducers/map_reducer'
import basketReducer from './reducers/basket_reducer'
import postcodeReducer from './reducers/postcode_reducer'


import API from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);

const reducers = combineReducers({
  venues: venuesReducer,
  menu: menuReducer,
  map: mapReducer,
  basket: basketReducer,
  postcode: postcodeReducer
});

let basket_template = {
  total: 0.00,
  items: {},
  venue: -1,
  venueid: -1,
  venue_stripe_acct: ""
}

const initialState = {
  venues: [],
  menu: {},
  map: false,
  basket: basket_template,
  postcode: "SW7"
};

const middlewares = applyMiddleware(reduxPromise, logger);

import Router from './router'
import ComingSoon from './components/coming_soon'

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, initialState, middlewares)}>
      {/*<ComingSoon/>*/}
      <Router />
    </Provider>
    ,root);
}

