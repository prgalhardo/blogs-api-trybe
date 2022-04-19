const jwt = require('jsonwebtoken');

const generateToken = (data) => {
// Agradecimento: Pedro Lima, turma 16A.
  const payload = {
    user: data,
  };

  const secret = process.env.JWT_SECRET;
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = generateToken;