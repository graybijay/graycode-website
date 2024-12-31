import axios from 'axios';
import { getToken } from './token';
import { ApiEndPoints } from './apiconfig';
class RequestManager {
   
     async getRequest() {
        const request = axios.create();        
        const access_token = await getToken()
        request.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        request.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
         request.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
         request.defaults.headers.common['CompanyId']=ApiEndPoints.companyId
        return request;
    }

}
export  default  new RequestManager().getRequest;