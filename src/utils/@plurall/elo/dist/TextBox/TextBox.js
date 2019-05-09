"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = require("react-emotion");

var _Text = _interopRequireDefault(require("../Text/Text"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _themes = _interopRequireDefault(require("../themes"));

var _helpers = require("./helpers");

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
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  white-space: initial;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  max-width: 350px;\n  color: ", ";\n  background-color: ", ";\n  font-size: 12px;\n  font-family: ", ";\n  font-weight: 300;\n  padding: 8px 10px;\n  margin: 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n  line-height: 1.5;\n  letter-spacing: 0.3px;\n  top: 8px;\n  transition: opacity 200ms ease 0s, transform 200ms ease 0s;\n\n  &:before {\n    position: absolute;\n    content: \"\";\n    top: -13px;\n    left: 7%;\n    margin-left: -7px;\n    border-width: 7px;\n    border-style: solid;\n    border-color: transparent transparent ", " transparent;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  height: 40px;\n  width: 100%;\n  padding: 8px 20px 8px 8px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  box-sizing: border-box;\n\n  &:focus, &:hover {\n    border-color: ", ";\n    box-shadow: inset 0 0 0 1px #f3d661;\n  }\n\n  &:focus {\n    background-color: ", ";\n    outline: none;\n  }\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n    font-family: ", ";\n  }\n"]);

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

var textBoxWrapperStyles = (0, _reactEmotion.css)(_templateObject());
var labelStyles = (0, _reactEmotion.css)(_templateObject2());
var inputWrapperStyles = (0, _reactEmotion.css)(_templateObject3());
var inputStyles = (0, _reactEmotion.css)(_templateObject4(), _themes.default.colors.baseGrey, _themes.default.typography.text.normal.fontsize, _themes.default.typography.fontFamily.default, _themes.default.colors.whiteSnow, _themes.default.colors.lightestGrey, _themes.default.colors.baseYellow, _themes.default.colors.lightestYellow, _themes.default.colors.baseGrey, _themes.default.typography.text.normal.fontsize, _themes.default.typography.fontFamily.default);
var mismatchMessageTextStyles = (0, _reactEmotion.css)(_templateObject5(), _themes.default.colors.white, _themes.default.colors.darkestGrey, _themes.default.typography.fontFamily.default, _themes.default.colors.darkestGrey);
var mismatchMessageContainerStyles = (0, _reactEmotion.css)(_templateObject6());
var masks = {
  date: '**/**'
};
var maskChars = {
  date: null
};
var regExps = {
  date: (0, _helpers.dateRegExp)()
};

var TextBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextBox, _React$Component);

  function TextBox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: '',
      hideMismatchMessage: true
    });

    _defineProperty(_assertThisInitialized(_this), "isValid", function (value) {
      var match = new RegExp(regExps[_this.props.mask]);
      return match.test(value);
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (value) {
      if (_this.isValid(value)) {
        _this.setState({
          value: value,
          hideMismatchMessage: true
        });
      } else {
        _this.setState({
          hideMismatchMessage: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      _this.setState({
        hideMismatchMessage: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.updateState(event.target.value);

      var value = _this.isValid(event.target.value) ? event.target.value : _this.state.value;
      _this.props.onChange && _this.props.onChange(value);
    });

    return _this;
  }

  _createClass(TextBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('touchstart', this.handleClickOutside);
      document.addEventListener('mousedown', this.handleClickOutside);
      this.updateState(this.props.value);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('touchstart', this.handleClickOutside);
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var label = this.props.label;
      return _react.default.createElement("div", {
        className: textBoxWrapperStyles
      }, label && _react.default.createElement(_Text.default, {
        size: "small",
        className: labelStyles,
        secondary: true
      }, label), _react.default.createElement("div", {
        className: inputWrapperStyles
      }, _react.default.createElement(_reactInputMask.default, {
        mask: masks[this.props.mask],
        maskChar: maskChars[this.props.mask],
        className: inputStyles,
        placeholder: this.props.placeholder,
        onChange: this.handleChange,
        value: this.state.value
      })), this.state.hideMismatchMessage || _react.default.createElement("div", {
        className: mismatchMessageContainerStyles
      }, _react.default.createElement(_Text.default, {
        size: "small",
        className: mismatchMessageTextStyles,
        secondary: true
      }, this.props.mismatchMessage)));
    }
  }]);

  return TextBox;
}(_react.default.Component);

TextBox.propTypes = {
  /** An optional text shown above the TextBox. It's useful to describe
   * its intent and functionality to the user
   */
  label: _propTypes.default.string,

  /** A callback to be called when the user types on input field.
   * It receives the currently typed text as an argument
   */
  onChange: _propTypes.default.func,

  /** The placeholder text shown on the input field when it's empty */
  placeholder: _propTypes.default.string,

  /** Choose the mask the component will use to filter the typed text  */
  mask: _propTypes.default.string,

  /** A message to be shown below the input if there is a pattern mismatch */
  mismatchMessage: _propTypes.default.string,

  /** A value for the field to be rendered with */
  value: _propTypes.default.string
};
TextBox.defaultProps = {
  mismatchMessage: 'Formato de texto incorreto.',
  value: ''
};
var _default = TextBox;
exports.default = _default;