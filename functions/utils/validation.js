import { clientIDError, clientSecretError } from '../utils/errors.js';

let validateCredentials = (client_id, client_secret, res) => {
  if (!client_id) return clientIDError(res);

  if (!client_secret) return clientSecretError(res);
};

export default validateCredentials;
