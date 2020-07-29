# Twitch Analytics Site

Analyze Twitch streamer and game analytics

## Requirements

- Install Node.js (^12.0.0)
- Create Twitch developer account - <https://dev.twitch.tv/>
- Register a Twitch application - <https://dev.twitch.tv/console/apps/create>
- API Client Tool (Postman, Insomnia, etc.)

## Run locally

1. Navigate to the `functions` directory and install Node Dependencies ->

   ```bash
   cd functions
   ```

   ```bash
   npm install
   ```

2. Copy the values from `.env.example` into a new `.env` file to set up your credentials

3. Navigate to the `client` directory and install Node Dependencies ->
   ```bash
   cd functions
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

5. With both servers running, navigate to `http://localhost:3000` in your browser and enter in a Twitch username to fetch user data from the API
