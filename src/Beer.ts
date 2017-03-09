import Client from "./Client";

export default class Beer extends Client {
    /**
     * Get all the beers.
     *
     * @param {callback} callback
     * @param {object} params
     * @return {Promise}
     */
    public all(callback: () => any, params?: object): Promise<any> {
        return this.get("beers", callback, params);
    }

    /**
     * Get a single beer by it's ID.
     *
     * @param number id
     * @param {callback} callback
     * @return {Promise}
     */
    public find(id: number, callback: () => any): Promise<any> {
        return this.get(`beers/${id}`, callback);
    }

    /**
     * Get a single, random beer.
     *
     * @param {callback} callback
     * @return {Promise}
     */
    public random(callback: () => any): Promise<any> {
        return this.get("beers/random", callback);
    }
}
