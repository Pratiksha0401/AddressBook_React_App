import config from '../congi/config.js';
const axios = require('axios').default;

export default class AddressbookService {
    baseUrl = config.baseUrl;
    addPerson(data) {
        return axios.post(`${this.baseUrl}address`, data);
    }
}