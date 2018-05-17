const fs = require('fs');

exports.readFolder = function(nameFolder) {
    return fs.readdirSync(nameFolder);
} 