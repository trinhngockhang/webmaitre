var { findByOption,createProductByData,findCategory} = require("../helper/query");
var CategoryModel = require('../models/Category.model');
var { onSuccess, onFailure } = require('../helper/response');

exports.createCategory = function(req,res) {
    var Data = req.body;
    createProductByData(CategoryModel,Data,(err,doc) => {
        (err) ? onFailure(res, err) : onSuccess(res, doc);
    })
}

exports.getcategory = function(req,res) {
    findCategory(CategoryModel,{},(err,doc) => {
        (err) ? onFailure(res, err) : onSuccess(res, doc);
    })
}