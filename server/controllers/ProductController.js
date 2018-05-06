var { findByOption,createProductByData} = require("../helper/query");
var ProductModel = require('../models/ProductModel');
var { onSuccess, onFailure } = require('../helper/response');

exports.findProduct= function(req, res) {
    var field = req.body.field;
    findByOption(ProductModel, {field : req.body.data }, (err, doc) => {
        (err) ? onFailure(res, err) : onSuccess(res, doc);
    })
}

exports.createProduct = function(req,res) {
    var Data = req.body;
    createProductByData(ProductModel,Data,(err,doc) => {
        (err) ? onFailure(res, err) : onSuccess(res, doc);
    })
}

