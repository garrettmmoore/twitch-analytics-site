let serverError = (err, res) => {
  console.error(err);

  return res.status(500).json({
    message: 'Server Error.'
  });
};

let clientIDError = res => {
  return res.status(401).json({
    message: 'You must provide a Client ID.'
  });
};

let clientSecretError = res => {
  return res.status(401).json({
    message: 'You must provide a Client Secret.'
  });
};

module.exports = { serverError, clientIDError, clientSecretError };
