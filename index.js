const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Connect to MLab DB
mongoose.connect(keys.mongoURI);

// Execute mongoose to set up User model before executing passport.js which has data from Mongoose
require('./models/User');

// Execute passport.js to configure Passport.js
require('./services/passport');

// Define the app object
const app = express();

// Use cookies for Passport
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

/**
 * Pass the app object as a parameter to configure authentication routes
 * 
 * TODO: Refactor to use express.Router
 */
require('./routes/authRoutes')(app);

// Application Route Handlers
app.get('/', (req, res) => {
  res.send({ Hello: 'World'});
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
