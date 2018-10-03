import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false: 
        return <a href="/auth/google">Login with Google</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" to={ this.props.auth ? '/surveys' : '/' }>Emily</Link>
          {this.renderContent()}
        </div>
      </nav>
    )
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
