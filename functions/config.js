import dotenv from 'dotenv';
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const config = {
  client_id: process.env.TWITCH_CLIENT_ID,
  client_secret: process.env.TWITCH_CLIENT_SECRET,
  grant_type: process.env.TWITCH_GRANT_TYPES,
  scopes: process.env.TWITCH_SCOPES,
  twitch_oauth_url: process.env.TWITCH_OAUTH_API_URL,
  twitch_api_url: process.env.TWITCH_API_URL
};

export default config;
