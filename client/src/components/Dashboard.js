import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <h3>Dashboard</h3>
      <p><strong>To test this application, use test credit card credentials:</strong></p>
      <ul>
        <li><strong>Credit Card Number:</strong> 4242 4242 4242 4242</li>
        <li><strong>Test Expiration Date:</strong> 12/22</li>
        <li><strong>Test CCV Number:</strong> 222</li>
      </ul>
      <br />
      <Link to="/surveys/new">Create a Survey</Link>
    </div>
  )
}

export default Dashboard;
