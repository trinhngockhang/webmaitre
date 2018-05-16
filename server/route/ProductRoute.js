const express = require('express');
const Router = express.Router();
const apiConfig = require('../../shared/config/api-config');
var { findProductByName,findProductByCategory,createProduct,getCategory} = require('../controllers/ProductController');

Router.post(apiConfig.FIND_PRODUCTBYNAME, findProductByName);

Router.post(apiConfig.FIND_PRODUCTBYCATEGORY, findProductByCategory);

Router.post(apiConfig.CREATE_PRODUCT, createProduct);

Router.get(apiConfig.GET_CATEGORY, getCategory);

Router.get('/',(req,res) => {
    res.send("a");
})

module.exports = Router; 