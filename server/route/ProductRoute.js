const express = require('express');
const Router = express.Router();
const apiConfig = require('../../shared/config/api-config');
var { findProductByName,findProductByCategory,createProduct,getCategory} = require('../controllers/ProductController');
const { readFolder } = require('../../shared/helper/readFolder');
const fs = require('fs')
Router.post(apiConfig.FIND_PRODUCTBYNAME, findProductByName);

Router.post(apiConfig.FIND_PRODUCTBYCATEGORY, findProductByCategory);

Router.post(apiConfig.CREATE_PRODUCT, createProduct);

Router.get(apiConfig.GET_CATEGORY, getCategory);

Router.get('/',(req,res) => {
    let arrName = readFolder('pages');
    let arr = [];
    arrName.forEach(file => {
        let obj = {
            pathToImage: '/public/' + file
        }
        let str = file;
        str = str.replace(/.js/g, '');
        obj.nameProduct = str;
        arr.push(obj);
    })
    res.send({ arrName: arr, status: 1 })
})

module.exports = Router; 