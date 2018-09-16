const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

// Connect to MLab DB
mongoose.connect(keys.mongoURI);

// Execute passport.js to configure Passport.js
require('./services/passport');

/**
 * Create the app object and pass it as a parameter to configure authentication routes
 * 
 * TODO: Refactor to use express.Router
 */
const app = express();
require('./routes/authRoutes')(app);

// Application Route Handlers
app.get('/', (req, res) => {
  res.send({ Hello: 'World'});
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
