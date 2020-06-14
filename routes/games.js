const express = require('express');
const fetch = require('node-fetch');
const tools = require('../get-twitch-oauth');
const config = require('../config');

const router = express.Router();
const { client_id, client_secret, twitch_api_url } = config;

/**
 * Gets game information by game ID or name.
 */
router.get('/:id', async (req, res) => {
  if (!client_id || !client_secret) {
    return res.status(401).json({
      message: 'You must provide a Client ID and a Client Secret.'
    });
  }

  // Get access token
  const { access_token } = await tools.getTwitchAccessToken();

  try {
    // Set headers
    const headers = {
      'Client-ID': client_id,
      Authorization: `Bearer ${access_token}`
    };

    // Set query parameters
    const { id } = req.params;

    // Get data from Twitch API
    const response = await fetch(`${twitch_api_url}/games?${id}`, {
      headers
    });

    // Format data and send to the client
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: 'Server Error.'
    });
  }
});

/**
 * Gets games sorted by number of current viewers on Twitch, most popular first.
 */

router.get('/top', async (req, res) => {
  if (!client_id || !client_secret) {
    return res.status(401).json({
      message: 'You must provide a Client ID and a Client Secret.'
    });
  }

  // Get access token
  const { access_token } = await tools.getTwitchAccessToken();

  try {
    // Set headers
    const headers = {
      'Client-ID': client_id,
      Authorization: `Bearer ${access_token}`
    };

    // Get data from Twitch API
    const response = await fetch(`${twitch_api_url}/games/top`, {
      headers
    });

    // Format data and send to the client
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: 'Server Error.'
    });
  }
});

module.exports = router;
