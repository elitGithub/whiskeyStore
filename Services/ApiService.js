import axios from "axios";
import items from '../whiskey.json';
export class ApiService {

    constructor(targetUrl) {
        this.targelUrl = targetUrl;
    }

    get() {
        // TODO: temporary! store in DB and properly retrieve!
        return items.items;
        //return axios.get(this.targelUrl);
    }
    post() {}
    put() {}
    delete() {}
}