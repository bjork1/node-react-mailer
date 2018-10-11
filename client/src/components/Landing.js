import React from 'react';

const Landing = () => {
  return (
    <div className="container my-5">
      <div className="jumbotron mb-0 bg-white text-center">
        <h1 className="display-4">Welcome to MailShrimp</h1>
        <p className="lead">The Simplest Way to Send a Ton of Pointless Emails</p>
      </div>
      <div className="jumbotron mb-0 py-4 bg-white text-center">
        <h1 className="display-4">Step 1.</h1>
        <p className="lead">Log In with Google</p>
      </div>
      <div className="jumbotron mb-0 py-4 bg-white text-center">
        <h1 className="display-4">Step 2.</h1>
        <p className="lead">Add Credits to your Account</p>
      </div>
      <div className="jumbotron mb-0 py-4 bg-white text-center">
        <h1 className="display-4">Step 3.</h1>
        <p className="lead">Create a new Survey!</p>
      </div>
    </div>
  );
}

export default Landing;
