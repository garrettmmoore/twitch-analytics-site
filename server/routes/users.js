const express = require('express');
const { getUsers, getUserExtensions } = require('../controllers/users');
const router = express.Router();

/**
 * Gets information about one or more specified Twitch users.
 * Users are identified by optional user IDs and/or login name.
 */
router.get('/:login', getUsers);

/**
 * Get a list of all extensions (both active and inactive) for a specified user.
 * User is identified by user ID.
 */
router.get('/extensions/:user_id', getUserExtensions);

module.exports = router;
