require('dotenv').config();
let env;

switch (process.env.NODE_ENV) {
  case "test":
    env = {
      jwt: process.env.TEST_JWT_PRIVATE_KEY,
      db: process.env.TEST_DB
    }
    break;
  case "production":
    env = {
      jwt: process.env.PROD_JWT_PRIVATE_KEY,
      db: process.env.PROD_DB
    }
    break;
  default:
    env = {
      jwt: process.env.DEV_JWT_PRIVATE_KEY,
      db: process.env.DEV_DB
    }
    break;
};


module.exports = {
  jwtSecret: env.jwt,
  mongoDB: env.db
}