const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (data) => {
// Agradecimento: Pedro Lima, turma 16A.
  const payload = {
    userId: data,
  };

  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = generateToken;