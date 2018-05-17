exports.FIND_PRODUCTBYNAME = "/find-product-by-name";
exports.FIND_PRODUCTBYCATEGORY = "/find-product-by-category";
exports.CREATE_PRODUCT = "/create-product";
exports.GET_CATEGORY = "/get-category";

const apiRequestStatus = {
    NONE: 'none',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
}

exports.apiRequestStatus = apiRequestStatus;
