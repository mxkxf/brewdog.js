import qs from "qs";

export default class Client {
    /**
     * Create a new instance of a HTTP client.
     *
     * @param {string} baseUrl
     */
    constructor(private baseUrl: string = "https://api.punkapi.com/v2") {}

    /**
     * Make a GET request.
     *
     * @param {string} endpoint
     * @param {callback} callback
     * @param {Object} params
     * @return {Promise}
     */
    protected get(endpoint: string, callback: (data) => any, params?: Object): Promise<any> {
        let url = this.buildUrl(endpoint, params);

        return fetch(url)
            .then((response) => response.json())
            .then((json) => callback(json));
    }

    /**
     * Build a URL from an endpoint and any query string parameters.
     *
     * @param {string} endpoint
     * @param {object} params
     * @return {string}
     */
    private buildUrl(endpoint: string, params?: object): string {
        let url = `${this.baseUrl}/${endpoint}`;

        if (params) {
            url += `?${qs.stringify(params)}`;
        }

        return '';
    }
}
