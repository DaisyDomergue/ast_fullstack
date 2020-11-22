import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
// import reducer from './reducers';
// import ReactDOM from 'react-dom';
import App from './App';


render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
