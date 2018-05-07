var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    name: { type: String, trim: true },
    url: { type: String },
    price: { type: Number },
    description: { type : String },
    parent : { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    discount: { type: Number },
    status: Number,
    index: Number,
    view: Number
});

module.exports = mongoose.model('Product', ProductSchema);
