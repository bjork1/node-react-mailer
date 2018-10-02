import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="https://mbtskoudsalg.com/images250_/email-icons-png.png" class="d-inline-block align-top mr-1" width="30" height="30"/>
            Emily
          </a>
          <div class="ml-auto">
            <a class="btn btn-sm btn-danger" href="/" role="button">Login with Google</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
