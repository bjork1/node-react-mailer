const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// Init Google OAuth 2.0 Strategy
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, cb) => {
    console.log('Access Token: ', accessToken);
    console.log('Refresh Token: ', refreshToken);
    console.log('Profile: ', profile);
  })
);
