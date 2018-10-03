import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
  /**
   * With redux-thunk, rather than returning an action
   * from this action creator 'fetchUser', whenever the action
   * creator gets called, it will instantly returna  function.
   * 
   * Here is the key:
   * When we wired up the reduxThunk library in ../src/index.js, 
   * we wired it up as a middleware. The purpose of this middleware
   * is to inspect whatever value we return from 'fetchUser'. If redux-thunk 
   * sees that we return a function in that middleware instead of a 
   * normal action, redux-thunk will automatically call this function and pass in the
   * DISPATCH function that was unavailable to us without redux-thunk.
   * 
   * Allowing us to pass the dispatch function in as an argument to our action
   * fetchUser allows us to forward any action we call to all of our reducers.
   * 
   * Now that we have access to the dispatch function, we don't need to 
   * immediately dispatch actions when the action is called. We can 
   * dispatch an action after a request has completed, such as below:
   */
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  }
};
