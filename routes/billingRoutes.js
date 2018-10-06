const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must be logged in to make this request' })
    }
    
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5,000 credits',
      source: req.body.id
    });

    // Passport middleware gives us access to the current user logged in making this request
    req.user.credits += 5000;
    const user = await req.user.save();

    res.send(user);
  });
};
