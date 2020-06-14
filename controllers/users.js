const fetch = require('node-fetch');
const { serverError } = require('../utils/errors');
const setHeaders = require('../auth/setHeaders');
const validateCredentials = require('../utils/validation');
const config = require('../config');
const { client_id, client_secret, twitch_api_url } = config;

let getUsers = async (req, res) => {
  try {
    if (validateCredentials(client_id, client_secret, res)) return;

    // Get headers
    let headers = await setHeaders(client_id);

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
    serverError(err, res);
  }
};

let getUserExtensions = async (req, res) => {
  try {
    if (validateCredentials(client_id, client_secret, res)) return;

    // get headers
    let headers = await setHeaders(client_id);

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
    serverError(err, res);
  }
};

module.exports = { getUsers, getUserExtensions };
