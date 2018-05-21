var { findByOption,createProductByData} = require("../helper/query");
var ProductModel = require('../models/Product.model');
var CategoryModel = require('../models/Category.model');
var { onSuccess, onFailure } = require('../helper/response');

exports.findProductByCusOption= function(req, res) {
    findByOption(ProductModel, req.body.option, (err, doc) => {
        (err) ? onFailure(res, err) : onSuccess(res, doc);
    })
}

exports.getCategory= function(req, res) {
    findByOption(CategoryModel, { }, (err, doc) => {
        (err) ? onFailure(res, err) : onSuccess(res, doc);
    })
}

exports.findProductByCategory= function(req, res) {
    findByOption(ProductModel, {parent : req.body.data }, (err, doc) => {
        (err) ? onFailure(res, err) : onSuccess(res, doc);
    })
}

exports.createProduct = function(req,res) {
    var Data = req.body;
    createProductByData(ProductModel,Data,(err,doc) => {
        (err) ? onFailure(res, err) : onSuccess(res, doc);
    })
}

