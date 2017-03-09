"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Client_1 = require("./Client");
var Beer = (function (_super) {
    __extends(Beer, _super);
    function Beer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get all the beers.
     *
     * @param {callback} callback
     * @param {object} params
     * @return {Promise}
     */
    Beer.prototype.all = function (callback, params) {
        return this.get("beers", callback, params);
    };
    /**
     * Get a single beer by it's ID.
     *
     * @param number id
     * @param {callback} callback
     * @return {Promise}
     */
    Beer.prototype.find = function (id, callback) {
        return this.get("beers/" + id, callback);
    };
    /**
     * Get a single, random beer.
     *
     * @param {callback} callback
     * @return {Promise}
     */
    Beer.prototype.random = function (callback) {
        return this.get("beers/random", callback);
    };
    return Beer;
}(Client_1["default"]));
exports["default"] = Beer;
