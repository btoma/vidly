const winston = require('winston');
const mongoose = require('mongoose');
const {mongoDB} = require('../config');

module.exports = function() {
  const db = mongoDB;
  mongoose.connect(db, {useNewUrlParser: true })
    .then(() => winston.info(`Connected to ${db}...`));
}