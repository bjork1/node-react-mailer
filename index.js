const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// Init Google OAuth 2.0 Strategy
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }), (accessToken) => {
    console.log(accessToken);
  }
);

// Google Authentication Route Handler
app.get(
  '/auth/google', 
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

// Route Handlers
app.get('/', (req, res) => {
  res.send({ Hello: 'World'});
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
