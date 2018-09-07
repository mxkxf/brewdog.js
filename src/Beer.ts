import { AxiosPromise } from "axios";
import Client from "./Client";

export default class Beer extends Client {
    /**
     * Get all the beers.
     *
     * @param {object} params
     *
     * @return {Promise}
     */
    public async all(params?: object): Promise<any> {
        return await this.get("beers", params);
    }

    /**
     * Get a single beer by it's ID.
     *
     * @param {number} id
     *
     * @return {Promise}
     */
    public async find(id: number): Promise<any> {
        return await this.get(`beers/${id}`);
    }

    /**
     * Get a single, random beer.
     *
     * @return {Promise}
     */
    public random(): Promise<any> {
        return this.get("beers/random");
    }
}
