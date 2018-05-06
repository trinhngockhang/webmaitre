exports.findByOption = function(Model, option, cb) {
    Model.find(option).exec((err, datas) => {
        cb(err, datas);
    })
}