import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi! I'm Emily.</h1>
        </header>
        <p className="App-intro">
          To get started, click <a href="/auth/google">here</a> to log in with Google.
        </p>
      </div>
    );
  }
}

export default App;
