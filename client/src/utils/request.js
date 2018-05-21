import { handleRequest } from './apiRequest';
import * as urlConfig from '../constants/url-config';
import * as actions from '../constants/actions';
import { isEmptyOrUndefined } from '../../../shared/helper/check-data';
import { apiRequestStatus } from '../../../shared/config/api-config';

exports.findCategoryById = (data) => {
    const api = {
        method: 'post',
        url: urlConfig.FIND_USER_BY_USER_NAME,
        data: data
    }
    return (dispatch) => {
        handleRequest(api, (err, doc) => {
            if(err) {
                return dispatch({ type: actions.FIND_USER_BY_USER_NAME_HAS_ERR, category: []})
            }
            return dispatch({ type: actions.FIND_USER_BY_USER_NAME_SUCCESS, category: doc })
        })
    }
} 

exports.findProductDetailById = (data) => {
    const api = {
        method: 'post',
        url: urlConfig.FIND_PRODUCT_BY_CUS_OPTION,
        data: {
            option: {
                _id: data
            }
        }
    }
    return (dispatch) => {
        handleRequest(api, (err, doc) => {
            if(err) {
                return dispatch({ type: actions.FIND_PRODUCT_DETAIL_BY_ID, status: apiRequestStatus.ERROR, product: {}})
            }
            let result = isEmptyOrUndefined(doc) || isEmptyOrUndefined(doc[0]) ? {} : doc[0];
            return dispatch({ type: actions.FIND_PRODUCT_DETAIL_BY_ID, product: result, status: apiRequestStatus.SUCCESS})
        })
    }
}

exports.getCategory = () => {
    const api = {
        method: 'get',
        url: urlConfig.GET_CATEGORY,
    }
    return (dispatch) => {
        handleRequest(api, (err, docs) => {
            if(err) {
                return dispatch({ type: actions.GET_CATEGORY, categorys: [], status: apiRequestStatus.ERROR })
            }
            let result = isEmptyOrUndefined(docs) ? [] : docs;
          
            return dispatch({ type: actions.GET_CATEGORY, categorys: result, status: apiRequestStatus.SUCCESS })
        })
    }
}

exports.findProductByCategory = (id) => {
    const api = {
        method: 'post',
        url: urlConfig.FIND_PRODUCTBYCATEGORY,
        data: { data: id }
    }
    return (dispatch) => {
        handleRequest(api, (err, docs) => {
            if(err) {
                return dispatch({ type: actions.FIND_PRODUCTBYCATEGORY, products: [], status: apiRequestStatus.ERROR })
            }
            let result = isEmptyOrUndefined(docs) ? [] : docs;

            return dispatch({ type: actions.FIND_PRODUCTBYCATEGORY, products: result, status: apiRequestStatus.SUCCESS })
        })
    }
}