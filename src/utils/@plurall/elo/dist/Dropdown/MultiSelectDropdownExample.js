"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MultiSelectDropdownExample =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MultiSelectDropdownExample, _React$Component);

  function MultiSelectDropdownExample() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MultiSelectDropdownExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MultiSelectDropdownExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      values: [1, 3]
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (values) {
      _this.setState({
        values: values
      });
    });

    return _this;
  }

  _createClass(MultiSelectDropdownExample, [{
    key: "render",
    value: function render() {
      var items = [{
        value: 'The Legend of Zelda',
        id: 1
      }, {
        value: 'Castlevania',
        id: 2
      }, {
        value: 'Metal Gear Solid',
        id: 3
      }, {
        value: 'Metroid',
        id: 4
      }, {
        value: 'SimCity',
        id: 5
      }, {
        value: 'Street Fighter',
        id: 6
      }, {
        value: 'Mortal Kombat',
        id: 7
      }, {
        value: 'Super Mario Bros.',
        id: 8
      }, {
        value: 'Megaman',
        id: 9
      }, {
        value: 'Diablo',
        id: 10
      }, {
        value: 'Age of Empires',
        id: 11
      }, {
        value: 'Doom',
        id: 12
      }];
      return _react.default.createElement(_Dropdown.default, {
        items: items,
        name: "Classic Games",
        placeholder: "Selecione",
        selected: this.state.values,
        onChange: this.handleChange,
        multiselect: true,
        buttonLabel: {
          singular: 'game',
          plural: 'games'
        }
      });
    }
  }]);

  return MultiSelectDropdownExample;
}(_react.default.Component);

exports.default = MultiSelectDropdownExample;