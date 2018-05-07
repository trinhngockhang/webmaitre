const express = require('express');
const Router = express.Router();
const apiConfig = require('../../shared/config/api-config');
var { findProductByName,findProductByCategory,createProduct } = require('../controllers/ProductController');
var { createCategory,getcategory } = require('../controllers/CategoryController'); 

Router.post(apiConfig.FIND_PRODUCTBYNAME, findProductByName);

Router.post(apiConfig.FIND_PRODUCTBYCATEGORY, findProductByCategory);

Router.post(apiConfig.CREATE_PRODUCT, createProduct);

Router.post(apiConfig.CREATE_CATEGORY, createCategory);

Router.get(apiConfig.GETCATEGORY, getcategory);

Router.get('/',(req,res) => {
    res.send("a");
})

module.exports = Router; 