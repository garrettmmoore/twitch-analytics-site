import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import './config.js';

import gamesRouter from './routes/games.js';
import usersRouter from './routes/users.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

// Enable rate-limiter for localhost
app.set('trust proxy', 1);
// Enable speed-limiter
app.enable('trust proxy');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

// Enable middleware for logging in development mode
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Match routes
app.use('/users', usersRouter);
app.use('/games', gamesRouter);

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
