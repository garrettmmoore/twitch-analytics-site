import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

import { getUserExtensions, getUsers } from '../controllers/users.js';

const usersRouter = Router();

const userLimiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'User endpoint rate limit has been reached.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
});

const extensionLimiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Extension endpoint rate limit has been reached.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
});

const speedLimiter = slowDown({
  windowMs: 30 * 1000, // 30 seconds
  delayAfter: 10, // allow 10 requests per 30 seconds, then...
  delayMs: 500 // begin adding 500ms of delay per 30 seconds
});

/**
 * Gets information about one or more specified Twitch users.
 * Users are identified by optional user IDs and/or login name.
 */
usersRouter.get('/:login', userLimiter, speedLimiter, getUsers);

/**
 * Get a list of all extensions (both active and inactive) for a specified user.
 * User is identified by user ID.
 */
usersRouter.get(
  '/extensions/:user_id',
  extensionLimiter,
  speedLimiter,
  getUserExtensions
);

export default usersRouter;
