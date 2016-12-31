import Client from './Client';

export default class Beer extends Client {

    all(callback, params = {}) {
        return this.get('beers', callback, params);
    }

    find(id, callback) {
        return this.get(`beers/${id}`, callback);
    }

    random(callback) {
        return this.get('beers/random', callback);
    }

}
