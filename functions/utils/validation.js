const errors = require('../utils/errors');
const { clientIDError, clientSecretError } = errors;

let validateCredentials = (client_id, client_secret, res) => {
  if (!client_id) return clientIDError(res);

  if (!client_secret) return clientSecretError(res);
};

module.exports = validateCredentials;
