import fetch from 'node-fetch';

import setHeaders from '../auth/setHeaders.js';
import config from '../config.js';
import { serverError } from '../utils/errors.js';
import { validateCredentials } from '../utils/validation.js';

const { client_id, client_secret, twitch_api_url } = config;

let cachedData;
let cacheTime;

const getUsers = async (req, res) => {
  // Check if we are in the cache and return the cached data
  // In memory cache
  if (cacheTime && cacheTime > Date.now() - 30 * 1000) {
    return res.json(cachedData);
  }
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

    // Set the cache so the next request can use the cached data
    cachedData = data;
    cacheTime = Date.now();
    data.cacheTime = cacheTime;

    console.log(data);
    return res.json(data);
  } catch (err) {
    return serverError(err, res);
  }
};

const getUserExtensions = async (req, res) => {
  try {
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

    console.log(data);
    return res.json(data);
  } catch (err) {
    return serverError(err, res);
  }
};

export { getUserExtensions, getUsers };
