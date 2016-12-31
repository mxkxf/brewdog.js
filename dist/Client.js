'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASE_URL = 'https://api.punkapi.com/v2';

var Client = function () {
    function Client() {
        _classCallCheck(this, Client);
    }

    _createClass(Client, [{
        key: 'get',
        value: function get(endpoint, callback) {
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var url = BASE_URL + '/' + endpoint;

            if (params) {
                url += '?' + _qs2.default.stringify(params);
            }

            return fetch(url).then(function (response) {
                return response.json();
            }).then(function (json) {
                return callback(json);
            });
        }
    }]);

    return Client;
}();

exports.default = Client;