import { clientIDError, clientSecretError } from '../utils/errors.js';

let validateCredentials = (client_id, client_secret, res) => {
  if (!client_id) return clientIDError(res);

  if (!client_secret) return clientSecretError(res);
};

let isValidPath = path => {
  const pathValidationRegex = /^(\/?[a-z0-9]+)+$/;
  console.log(pathValidationRegex.test(path)); // true
  if (path) return true;
};

export { validateCredentials, isValidPath };
