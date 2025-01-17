import 'jest-localstorage-mock';
const {User} = require('../../../models/user');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../../config');
const mongoose = require('mongoose');

describe('user.generateAuthToken', () => {
  it('should return a valid JWT', () => {
    const payload = { 
      _id: new mongoose.Types.ObjectId().toHexString(), 
      isAdmin: true 
    };
    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, jwtSecret);
    expect(decoded).toMatchObject(payload);
  });
});