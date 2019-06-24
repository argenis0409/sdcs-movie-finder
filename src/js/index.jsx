import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import reducers from './reducers';
import App from './app';
import promiseMiddleware from 'redux-promise-middleware';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( composeEnhancers(
  applyMiddleware(
    promiseMiddleware()
  )
));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
