const express = require('express');
const app = express();

// Route Handlers
app.get('/', (req, res) => {
  res.send({ Bad: 'Mammajamma'});
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
