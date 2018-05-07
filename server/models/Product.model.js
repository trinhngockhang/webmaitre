var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    name: { type: String, trim: true },
    url: { type: String },
    price: { type: Number },
    description: { type : String },
    parent : { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    discount: { type: Number,default:0 },
    status: Number,
    index: Number,
    view: {type: Number,default:0}
});

module.exports = mongoose.model('Product', ProductSchema);
