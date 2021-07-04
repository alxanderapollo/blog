import React from 'react';
//import store, Provider, reducers, the app will be wrapped around the provider
import reducers from './reducers'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import App from './components/App';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  //pass in our reducers
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);
