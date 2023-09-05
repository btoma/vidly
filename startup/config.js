
const {jwtSecret} = require('../config');

module.exports = function() {
  if (!jwtSecret) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
  }
}