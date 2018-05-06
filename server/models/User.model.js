var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: { type: String, trim: true },
    pass: { type: String, trim: true }
});

module.exports = mongoose.model('UserModel', UserSchema);
