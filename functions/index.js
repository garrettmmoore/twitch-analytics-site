const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config({ path: `${__dirname}/.env` });

const app = express();
// enable rate-limiter for localhost
app.set('trust proxy', 1);
// enable speed-limiter
app.enable('trust proxy');
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

// Enable middleware for logging in development mode
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Match routes
app.use('/users', require('./routes/users'));
app.use('/games', require('./routes/games'));

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// const port = process.env.PORT || 8000;

// app.listen(port, () => {
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${port}`
//   );
// });

module.exports = { app };
