
exports.findByOption = function(Model, option, cb) {
    Model.find(option).populate('parent').exec((err, datas) => {
        cb(err, datas);
    })
}
exports.createProductByData = function(Model,Data,cb) {
    Model.create(Data,(err,doc) => {
        cb(err, doc);
    })
}