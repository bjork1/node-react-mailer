import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripePayments extends Component {
  render() {
    return (
      <StripeCheckout 
        name="Emily"
        description="$5 for 5,000 email survey credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-sm btn-secondary mx-1">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default StripePayments;
