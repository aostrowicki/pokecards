import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import combinedReducers, { loadCart } from './reducers'


const cartStorage = loadCart();
const store = createStore(combinedReducers, { cart: cartStorage }, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);