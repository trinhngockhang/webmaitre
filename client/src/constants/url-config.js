import * as apiConfig from '../../../shared/config/api-config';
import serverConfig from '../../../shared/config/server-config';

const url = serverConfig.host + ":" + serverConfig.portServerNode + '/api';

module.exports = {
    FIND_USER_BY_USER_NAME: url + apiConfig.FIND_USER_BY_USER_NAME,
    FIND_PRODUCTBYNAME: url + apiConfig.FIND_PRODUCTBYNAME,
    FIND_PRODUCTBYCATEGORY: url + apiConfig.FIND_PRODUCTBYCATEGORY,
    CREATE_PRODUCT: url + apiConfig.CREATE_PRODUCT,
    GET_CATEGORY: url + apiConfig.GET_CATEGORY,
}
