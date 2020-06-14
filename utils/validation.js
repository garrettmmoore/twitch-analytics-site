let validateCredentials = (client_id, client_secret, res) => {
  if (!client_id) {
    return res.status(401).json({
      message: 'You must provide a Client ID.'
    });
  }

  if (!client_secret) {
    return res.status(401).json({
      message: 'You must provide a Client Secret.'
    });
  }
};

module.exports = validateCredentials;
