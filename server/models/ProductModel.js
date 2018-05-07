var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    name: { type: String, trim: true },
    url: {type: String},
    price: {type: String},
    description: {type : String},
    category : {type : String}
});

module.exports = mongoose.model('ProductModel', ProductSchema);
