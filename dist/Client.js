"use strict";
exports.__esModule = true;
var qs_1 = require("qs");
var Client = (function () {
    /**
     * Create a new instance of a HTTP client.
     *
     * @param {string} baseUrl
     */
    function Client(baseUrl) {
        if (baseUrl === void 0) { baseUrl = "https://api.punkapi.com/v2"; }
        this.baseUrl = baseUrl;
    }
    /**
     * Make a GET request.
     *
     * @param {string} endpoint
     * @param {callback} callback
     * @param {Object} params
     * @return {Promise}
     */
    Client.prototype.get = function (endpoint, callback, params) {
        var url = this.baseUrl + "/" + endpoint;
        if (params) {
            url += "?" + qs_1["default"].stringify(params);
        }
        return fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (json) { return callback(json); });
    };
    return Client;
}());
exports["default"] = Client;
