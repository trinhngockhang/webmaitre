const express = require('express');
const Router = express.Router();
const apiConfig = require('../../shared/config/api-config');
var { findProduct,createProduct } = require('../controllers/ProductController');

Router.post(apiConfig.FIND_PRODUCT, findProduct);

Router.post(apiConfig.CREATE_PRODUCT, createProduct);

Router.get('/',(req,res) => {
    res.send("a");
})

module.exports = Router; 