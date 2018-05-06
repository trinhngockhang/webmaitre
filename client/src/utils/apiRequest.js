import axios from 'axios';
import { API_STATUS_FAILURE, API_STATUS_SUCCESS } from '../../../shared/contanst';


export const handleRequest = (api, callback) => 
    axios(api).then(response => {
       
        console.log(response.data)
        if(response.data.status === API_STATUS_SUCCESS) 
        {
            callback(null, response.data.data)
        }
        else
        {
            callback(response.data.message);
        }
    })
    .catch(err => callback(err.response));
