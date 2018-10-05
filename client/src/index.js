import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Create redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  /**
   * The <Provider /> tag is a react component that knows how to read changes
   * from our redux store, so that every time the redux store gets some new 
   * state produced inside of it, the <Provider /> will inform all of its children 
   * components that some new state is available, and will update all of 
   * those components with the new state. It's the glue that holds React and 
   * Redux together.
   */
  <Provider store={store}><App /></Provider>, 
  document.querySelector('#root')
);
console.log('Stripe key is:', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is:', process.env.NODE_ENV);