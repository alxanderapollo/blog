import React from 'react';
//import store, Provider, reducers, the app will be wrapped around the provider

import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';

ReactDOM.render(
  //pass in our reducers
  <Provider store = {createStore(reducers)}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);
