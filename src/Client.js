import qs from 'qs';

const BASE_URL = 'https://api.punkapi.com/v2';

export default class Client {

    get(endpoint, callback, params = {}) {
        let url = `${BASE_URL}/${endpoint}`;

        if (params) {
            url += `?${qs.stringify(params)}`
        }

        return fetch(url)
            .then(response => response.json())
            .then(json => callback(json));
    }

}
