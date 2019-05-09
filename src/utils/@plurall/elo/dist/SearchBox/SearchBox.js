"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = require("react-emotion");

var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));

var _Menu = require("../Menu");

var _Text = _interopRequireDefault(require("../Text/Text"));

var _search = _interopRequireDefault(require("./search.svg"));

var _themes = _interopRequireDefault(require("../themes"));

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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  visibility: visible;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  height: 460px;\n  width: 100%;\n  position: absolute;\n  visibility: hidden;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  height: 40px;\n  width: 100%;\n  padding: 8px 20px 8px 40px;\n  background-color: ", ";\n  background-image: url(", ");\n  background-position: 10px 50%;\n  background-repeat: no-repeat;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  box-sizing: border-box;\n  transition: all 200ms ease;\n\n  &:focus, &:hover {\n    border-color: ", ";\n    box-shadow: inset 0 0 0 1px #f3d661;\n  }\n\n  &:focus {\n    background-color: ", ";\n    outline: none;\n  }\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n    font-family: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var searchBoxWrapperStyles = (0, _reactEmotion.css)(_templateObject());
var labelStyles = (0, _reactEmotion.css)(_templateObject2());
var inputWrapperStyles = (0, _reactEmotion.css)(_templateObject3());
var inputStyles = (0, _reactEmotion.css)(_templateObject4(), _themes.default.colors.baseGrey, _themes.default.typography.text.normal.fontsize, _themes.default.typography.fontFamily.default, _themes.default.colors.whiteSnow, _search.default, _themes.default.colors.lightestGrey, _themes.default.colors.baseYellow, _themes.default.colors.lightestYellow, _themes.default.colors.baseGrey, _themes.default.typography.text.normal.fontsize, _themes.default.typography.fontFamily.default);
var menuWrapperStyles = (0, _reactEmotion.css)(_templateObject5());
var visibleStyles = (0, _reactEmotion.css)(_templateObject6());

var SearchBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  function SearchBox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: '',
      expanded: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (item) {
      if (_this.props.onClick) {
        _this.props.onClick(item);
      }

      _this.setState({
        expanded: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(event.target.value);
      }

      _this.setState({
        value: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnFocus", function () {
      _this.setState({
        expanded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnBlur", function () {
      _this.setState({
        expanded: false
      });
    });

    return _this;
  }

  _createClass(SearchBox, [{
    key: "filteredItems",
    value: function filteredItems() {
      var value = this.state.value;
      var items = this.props.items;

      if (value) {
        var match = new RegExp((0, _escapeStringRegexp.default)(value), 'i');
        return items.filter(function (item) {
          return match.test(item.value);
        });
      }

      return items;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      var items = this.filteredItems();

      if (items.length > 0) {
        return _react.default.createElement(_Menu.Menu, null, items.map(function (item) {
          return _react.default.createElement(_Menu.MenuItem, {
            key: item.id,
            onClick: function onClick() {
              return _this2.handleClick(item);
            }
            /*>>>>>EDITADO<<<<<*/
          }, item.element);
        }));
      }

      return _react.default.createElement(_Menu.NotFound, null, this.props.notFoundMessage);
    }
  }, {
    key: "render",
    value: function render() {
      var label = this.props.label;
      return _react.default.createElement("div", {
        className: searchBoxWrapperStyles
      }, label && _react.default.createElement(_Text.default, {
        size: "small",
        className: labelStyles,
        secondary: true
      }, label), _react.default.createElement("div", {
        className: inputWrapperStyles
      }, _react.default.createElement("input", {
        className: inputStyles,
        placeholder: this.props.placeholder,
        onChange: this.handleChange,
        onFocus: this.handleOnFocus,
        onBlur: this.handleOnBlur,
        value: this.state.value
      }), _react.default.createElement("div", {
        className: (0, _reactEmotion.cx)(menuWrapperStyles, _defineProperty({}, visibleStyles, this.state.expanded))
      }, this.renderItems())));
    }
  }]);

  return SearchBox;
}(_react.default.Component);

SearchBox.propTypes = {
  /** An array of data describing the SearchBox content.
   * Each item must have a value and an id
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.object.isRequired,
    id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
  })).isRequired,

  /** An optional text shown above the SearchBox. It's useful to describe
   * its intent and functionality to the user
   */
  label: _propTypes.default.string,

  /** The text shown when the typed text on the input doesn't match any of
   * the given items values
   */
  notFoundMessage: _propTypes.default.string,

  /** A callback to be called when the user clicks on an item.
   * It receives the clicked item, with it's id and value
   */
  onClick: _propTypes.default.func,

  /** A callback to be called when the user types on input field.
   * It receives the currently typed text as an argument
   */
  onChange: _propTypes.default.func,

  /** The placeholder text shown on the input field when it's empty */
  placeholder: _propTypes.default.string
};
SearchBox.defaultProps = {
  notFoundMessage: 'Nenhum resultado encontrado',
  placeholder: 'Buscar'
};
var _default = SearchBox;
exports.default = _default;