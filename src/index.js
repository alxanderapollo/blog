import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers'
//import store, Provider, reducers, the app will be wrapped around the provider

const store = createStore(reducers, applyMiddleware(thunk));
  //pass in our reducers

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);
