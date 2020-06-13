# Twitch Analytics Site

Analyze Twitch streamer and game analytics

## Requirements

- Install Node.js (^12.0.0)
- Create Twitch developer account - https://dev.twitch.tv/
- Register a Twitch application - https://dev.twitch.tv/console/apps/create
- API Client Tool (Postman, Insomnia, etc.)

## Run locally

1. Install Node Dependencies ->
   `npm install`

2. Copy the values from `.env.example` into a new `.env` file to set up your credentials.

3. Start the server ->
   `npm run start`

4. Use Insomnia to send a request ->
   `http://localhost:5000/users/login=<TWITCH_USER_LOGIN_HERE>`
