const { expressjwt: jwt } = require("express-jwt");
const jwks = require('jwks-rsa');
const config = require('../config');

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: config.AUTH0_URI
  }),
  audience: config.AUTH0_AUDIENCE,
  issuer: config.AUTH0_ISSUER,
  algorithms: [config.AUHT0_ALGO]
});

module.exports = jwtCheck