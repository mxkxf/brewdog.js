'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Client2 = require('./Client');

var _Client3 = _interopRequireDefault(_Client2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Beer = function (_Client) {
    _inherits(Beer, _Client);

    function Beer() {
        _classCallCheck(this, Beer);

        return _possibleConstructorReturn(this, (Beer.__proto__ || Object.getPrototypeOf(Beer)).apply(this, arguments));
    }

    _createClass(Beer, [{
        key: 'all',
        value: function all(callback) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('beers', callback, params);
        }
    }, {
        key: 'find',
        value: function find(id, callback) {
            return this.get('beers/' + id, callback);
        }
    }, {
        key: 'random',
        value: function random(callback) {
            return this.get('beers/random', callback);
        }
    }]);

    return Beer;
}(_Client3.default);

exports.default = Beer;