exports.isNullOrUndefined = function(object) {
    return object === null || object === undefined;
}

exports.isEmptyOrUndefined = (obj) => {
    if(obj === undefined || obj == null) {
        return true;
    } else {
        if(obj != null && typeof obj === 'object' && obj.constructor === Object) {
            return Object.keys(obj).length === 0
        }
        if(Array.isArray(obj)) {
            return obj == null || obj.length == null || obj.length == 0
        }
        return false;
    } 
}