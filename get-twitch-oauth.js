const qs = require('querystring');
const nodeFetch = require('node-fetch');
const config = require('./config');
/**
 * Get Twitch Access Token
 * @param {string} client_id - Your Twitch client ID
 * @param {string} client_secret - Your Twitch client secret
 * @param {string} grant_type - Grant must be 'client_credentials'
 * @param {string} scopes - Space-separated list to specify required app permissions
 */

exports.getTwitchAccessToken = async ({
  client_id,
  client_secret,
  grant_type,
  scopes,
  twitch_oauth_url
} = config) => {
  // Stringify the url query string
  const params = qs.stringify({
    client_id,
    client_secret,
    grant_type,
    scopes
  });

  // Make request to aquire an access token
  const {
    access_token,
    refresh_token,
    expires_in,
    scope,
    token_type
  } = await nodeFetch(`${twitch_oauth_url}?${params}`, {
    method: 'POST'
  })
    .then(res => res.json())
    .catch(err => {
      throw new Error(err.message);
    });

  return { access_token, refresh_token, expires_in, token_type, scope };
};
