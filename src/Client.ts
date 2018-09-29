import axios, { AxiosResponse } from "axios";
import { stringify } from "qs";

export default abstract class Client {

    /**
     * Base URL for API.
     */
    private baseUrl: string = "https://api.punkapi.com/v2";

    /**
     * Make a GET request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise}
     */
    protected async get(endpoint: string, params?: Object): Promise<any> {
        const url = this.buildUrl(endpoint, params);

        const response: AxiosResponse = await axios.get(url);

        return response.data;
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
            url += `?${stringify(params)}`;
        }

        return url;
    }
}
