import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripePayments from './StripePayments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false: 
        return <li><a className="btn btn-sm btn-warning mx-1" href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li key="3" className="my-1 mx-1">Credits: {this.props.auth.credits}</li>,
          <li key="1"><StripePayments /></li>,
          <li key="2"><a className="btn btn-sm btn-warning mx-1" href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" to={ this.props.auth ? '/surveys' : '/' }>Emily</Link>

          <ul className="navbar-nav ml-auto" style={{ flexDirection: 'row' }}>
            {this.renderContent()}
          </ul>
          
        </div>
      </nav>
    )
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
