import config from '../congi/config.js';
//const axios = require('axios').default;
import AxiosService  from './axios-service';

// export default class AddressbookService {
//     baseUrl = config.baseUrl;
//     addPerson(data) {
//         return axios.post(`${this.baseUrl}address`, data);
//     }
// }

export default class AddressbookService {
    baseUrl = config.baseUrl;
    addPerson(data) {
        return AxiosService.postService(`${this.baseUrl}`, data);
    }

    getAllPersons() {
        return AxiosService.getService(`${this.baseUrl}`);
    }
}