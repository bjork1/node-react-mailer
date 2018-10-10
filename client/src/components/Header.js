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
        return <li className="nav-item"><a className="btn btn-sm btn-warning mx-1" style={{ backgroundColor: '#ffb982', borderColor: '#ffb982' }} href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li className="nav-item" key="3" className="my-1 mx-1">Credits: {this.props.auth.credits}</li>,
          <li className="nav-item" key="1"><StripePayments /></li>,
          <li className="nav-item" key="2"><a className="btn btn-sm btn-warning mx-1" style={{ backgroundColor: '#ffb982', borderColor: '#ffb982' }} href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">

          <Link className="navbar-brand" to={ this.props.auth ? '/surveys' : '/' }>
            <img src="https://i.imgur.com/d4StpWT.png" width="30" height="30" className="d-inline-block align-top mr-2" alt="Shrimp Logo"></img>
            MailShrimp
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" style={{ flexDirection: 'row' /* For Mobile Right-Align: justify-content: flex-end; */ }}>
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
