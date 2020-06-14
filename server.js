const express = require('express');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: `${__dirname}/.env` });

// Enable middleware for logging in development mode
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/users', require('./routes/users'));
app.use('/games', require('./routes/games'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${port}`
  );
});
