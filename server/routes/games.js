const express = require('express');
const { getTopGames, getGame } = require('../controllers/games');
const router = express.Router();

/**
 * Gets games sorted by number of current viewers on Twitch, most popular first.
 */
router.get('/top', getTopGames);

/**
 * Gets game information by game ID or name.
 */
router.get('/:id', getGame);

module.exports = router;
