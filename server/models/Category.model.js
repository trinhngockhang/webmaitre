var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    name: { type: String, trim: true },
    status: Number,
    index: Number
});

module.exports = mongoose.model('Category', CategorySchema);