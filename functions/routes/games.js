const express = require('express');
const { getTopGames, getGames } = require('../controllers/games');
const router = express.Router();

/**
 * Gets games sorted by number of current viewers on Twitch, most popular first.
 */
router.get('/top/:count', getTopGames);

/**
 * Gets game information by game ID or name.
 */
router.get('/:id', getGames);

module.exports = router;
