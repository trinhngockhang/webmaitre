var { findByOption,createProductByData} = require("../helper/query");
var ProductModel = require('../models/Product.model');
var { onSuccess, onFailure } = require('../helper/response');

exports.findProductByName= function(req, res) {
    findByOption(ProductModel, {name : req.body.data }, (err, doc) => {
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

