import { handleRequest } from './apiRequest';
import * as urlConfig from '../constants/url-config';
import * as actions from '../constants/actions';

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