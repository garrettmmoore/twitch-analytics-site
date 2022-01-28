import { Router } from 'express';

import { getGames, getTopGames } from '../controllers/games.js';

const gamesRouter = Router();

/**
 * Gets games sorted by number of current viewers on Twitch, most popular first.
 */
gamesRouter.get('/top/:count', getTopGames);

/**
 * Gets game information by game ID or name.
 */
gamesRouter.get('/:id', getGames);

export default gamesRouter;
