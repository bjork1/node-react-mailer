import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="alert alert-warning mt-3" role="alert">
        <h4 className="alert-heading">This application is in Test Mode</h4>
        <hr />
        <p>To use this application, you must add credits to your account with the "Add Credits" button in the header. Please use the follwing test credit card credentials when prompted:</p>
        <ul>
          <li><strong>Credit Card Number:</strong> 4242 4242 4242 4242</li>
          <li><strong>Test Expiration Date:</strong> 12/22</li>
          <li><strong>Test CCV Number:</strong> 222</li>
        </ul>
      </div>

      <h3 className="mt-3">Dashboard</h3>
      <Link to="/surveys/new"className="btn btn-warning" style={{ backgroundColor: '#ffb982', borderColor: '#ffb982' }}>Create a New Survey</Link>
    </div>
  )
}

export default Dashboard;
