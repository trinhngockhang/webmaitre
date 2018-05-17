var { API_STATUS_SUCCESS, API_STATUS_ERROR } = require("../../shared/contanst");
var { MessageApi } = require("../../shared/models/MessageApi");

exports.onSuccess = function (res, data) {
    var mes = MessageApi(data, API_STATUS_SUCCESS, 'success');
    res.send(mes);
}

exports.onFailure = function (res, mes) {
    var mes = MessageApi([], API_STATUS_ERROR, mes);
    res.send(mes);
}