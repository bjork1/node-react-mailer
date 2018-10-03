import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">Emily</a>
          <a href="/auth/google" role="button">Login with Google</a>
        </div>
      </nav>
    )
  }
}

export default Header;
