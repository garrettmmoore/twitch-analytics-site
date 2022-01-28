export const serverError = (err, res) => {
  console.error(err);

  return res.status(500).json({
    message: 'Server Error.'
  });
};

export const clientIDError = res => {
  return res.status(401).json({
    message: 'You must provide a Client ID.'
  });
};

export const clientSecretError = res => {
  return res.status(401).json({
    message: 'You must provide a Client Secret.'
  });
};
