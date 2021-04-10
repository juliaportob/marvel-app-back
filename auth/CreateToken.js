const jwt = require('jsonwebtoken');

const secret = 'Thor is the strongest Avenger';

const jwtSign = (payload, jwtSecret, jwtConfig) => (
  jwt.sign(payload, jwtSecret, jwtConfig)
);

const jwtConfig = {
  expiresIn: '150m',
  algorithm: 'HS256',
};

const createJWTPayload = (user) => ({
  iss: 'MarvelApp',
  aud: 'indentity',
  userData: user,
  });

module.exports = {
  secret,
  jwtConfig,
  createJWTPayload,
  jwtSign,
};