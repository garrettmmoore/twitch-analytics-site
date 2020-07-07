const express = require('express');
const { getUsers, getUserExtensions } = require('../controllers/users');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const userLimiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'User endpoint rate limit has been reached.'
});

const extensionLimiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Extension endpoint rate limit has been reached.'
});

const speedLimiter = slowDown({
  windowMs: 30 * 1000, // 30 seconds
  delayAfter: 1, // allow 10 requests per 30 seconds, then...
  delayMs: 500 // begin adding 500ms of delay per request above 10:
});

/**
 * Gets information about one or more specified Twitch users.
 * Users are identified by optional user IDs and/or login name.
 */
router.get('/:login', userLimiter, speedLimiter, getUsers);

/**
 * Get a list of all extensions (both active and inactive) for a specified user.
 * User is identified by user ID.
 */
router.get(
  '/extensions/:user_id',
  extensionLimiter,
  speedLimiter,
  getUserExtensions
);

module.exports = router;
