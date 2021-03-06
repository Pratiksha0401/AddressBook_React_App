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
        return AxiosService.postService(`${this.baseUrl}create`, data);
    }

    getAllPersons() {
        console.log("get call adress",this.baseUrl)
        return AxiosService.getService(`${this.baseUrl}`);
    }

    deletePerson(id) {
        return AxiosService.deleteService(`${this.baseUrl}delete/${id}`);
    }

    getPersonById(id){
        return AxiosService.getService(`${this.baseUrl}get/${id}`);
    }

    updatePerson(id, data) {
        return AxiosService.updateService(`${this.baseUrl}update/${id}`,data);
    }
}