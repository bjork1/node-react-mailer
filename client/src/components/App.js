import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <div className="container"><h3>Dashboard</h3><p><strong>To test this application, use test credit card credentials:</strong></p><ul><li><strong>Credit Card Number:</strong> 4242 4242 4242 4242</li><li><strong>Test Expiration Date:</strong> 12/22</li><li><strong>Test CCV Number:</strong> 222</li></ul></div>
const SurveyNew = () => <div className="container"><h3>New Survey</h3></div>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
