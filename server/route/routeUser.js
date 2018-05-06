const express = require('express');
const Router = express.Router();
const apiConfig = require('../../shared/config/api-config');
var { findUserByUserName } = require('../controllers/User.controller');

Router.post(apiConfig.FIND_USER_BY_USER_NAME, findUserByUserName);

module.exports = Router;