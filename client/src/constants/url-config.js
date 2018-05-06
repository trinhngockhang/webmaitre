import * as apiConfig from '../../../shared/config/api-config';
import serverConfig from '../../../shared/config/server-config';

const url = serverConfig.host + ":" + serverConfig.portServerNode;

module.exports = {
    FIND_USER_BY_USER_NAME: url + apiConfig.FIND_USER_BY_USER_NAME
}
