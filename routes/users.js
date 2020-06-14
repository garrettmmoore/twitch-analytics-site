const express = require('express');
const fetch = require('node-fetch');
const tools = require('../get-twitch-oauth');
const config = require('../config');

const router = express.Router();
const { client_id, client_secret, twitch_api_url } = config;

/**
 * Gets information about one or more specified Twitch users.
 * Users are identified by optional user IDs and/or login name.
 */
router.get('/:login', async (req, res) => {
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
    const { login } = req.params;

    // Get data from Twitch API
    const response = await fetch(`${twitch_api_url}/users?${login}`, {
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
 * Get a list of all extensions (both active and inactive) for a specified user.
 * User is identified by user ID.
 */
router.get('/extensions/:user_id', async (req, res) => {
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
    const { user_id } = req.params;

    // Get data from Twitch API
    const response = await fetch(
      `${twitch_api_url}/users/extensions?${user_id}`,
      { headers }
    );

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
