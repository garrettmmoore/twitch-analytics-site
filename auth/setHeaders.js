const getTwitchAccessToken = require('./get-twitch-oauth');

let setHeaders = async client_id => {
  const { access_token } = await getTwitchAccessToken();

  // Set headers
  const headers = {
    'Client-ID': client_id,
    Authorization: `Bearer ${access_token}`
  };

  return headers;
};

module.exports = setHeaders;
