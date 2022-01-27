# Twitch Analytics Site

Analyze Twitch streamer and game analytics.

Fetch game data and user profile data.

## Technology

- React
- Node.js
- Chakra UI

## Requirements

- Install Node.js (^12.0.0)
- [Create a Twitch developer account](https://dev.twitch.tv/)
- [Register a Twitch application](https://dev.twitch.tv/console/apps/create)
- Download an API Client Tool (Postman, Insomnia, etc.)

## Run locally

1. From the root directory, navigate into the `functions` directory and install Node Dependencies ->

   ```bash
   cd functions
   ```

   ```bash
   npm install
   ```

2. Copy the values from `.env.example` into a new `.env` file to set up your credentials

3. From the root directory, navigate into the `client` directory and install Node Dependencies ->
   ```bash
   cd client
   ```

   ```bash
   npm install
   ```

4. Return to the root of the project, install dependencies, and start both the backend and frontend servers ->
   ```bash
   npm install
   ```
   
   ```bash
   npm start
   ```

5. When both servers are running, navigate to `http://localhost:3000` in your browser and test out the application by entering in a Twitch username to fetch user data from the Twitch API

## Resources

- [Twitch API Documentation](https://dev.twitch.tv/docs/api/guide)
