var { findByOption } = require("../helper/query");
var UserModel = require('../models/User.model');
var { onSuccess, onFailure } = require('../helper/response');

exports.findUserByUserName = function(req, res) {
    findByOption(UserModel, { name: req.body.name }, (err, doc) => {
        (err) ? onFailure(res, err) : onSuccess(res, doc);
    })
}