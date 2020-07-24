const fetch = require('node-fetch');
const serverError = require('../utils/errors');
const setHeaders = require('../auth/setHeaders');
const validateCredentials = require('../utils/validation');
const config = require('../config');
const { client_id, client_secret, twitch_api_url } = config;

let getTopGames = async (req, res) => {
  try {
    // Get headers
    let headers = await setHeaders(client_id);

    // Set query parameters
    const { count } = req.params;

    // Get data from Twitch API
    const response = await fetch(`${twitch_api_url}/games/top?first=${count}`, {
      headers
    });

    // Format data and send to the client
    const data = await response.json();
    res.json(data);
  } catch (err) {
    serverError(err, res);
  }
};

let getGame = async (req, res) => {
  try {
    // validate credentials
    if (validateCredentials(client_id, client_secret, res)) return;

    // Get headers
    let headers = await setHeaders(client_id);

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
    serverError(err, res);
  }
};

module.exports = { getTopGames, getGame };
