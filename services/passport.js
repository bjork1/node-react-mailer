const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// Require User mongoose schema
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); // user.id is the Mongo Document record ID, not the id from Google (profile.id)
});

passport.deserializeUser((id, done) => { // id is from the user.id above
  User.findById(id)
  .then(user => {
    done(null, user);
  })
});

// Init Google OAuth 2.0 Strategy
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, authComplete) => {
    User.findOne({ googleID: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        // We already have a record with the given profile.id
        authComplete(null, existingUser); // null: no error occurred 
      } else {
        // Mongoose does not persist this record unless save() is called with it.
        new User({ googleID: profile.id })
        .save()
        .then(user => authComplete(null, user));
      }
    })
  })
);
