"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledHeading = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: ", ";\n  line-height: 1.2;\n  font-weight: normal;\n  margin: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseStyles = (0, _reactEmotion.css)(_templateObject(), _themes.default.typography.fontFamily.nunito, _themes.default.colors.basePlurall);

var sizeStyles = function sizeStyles(_ref) {
  var size = _ref.size;
  return (0, _reactEmotion.css)(_templateObject2(), _themes.default.typography.heading[size].fontsize);
};

var StyledHeading = (0, _reactEmotion.default)(_utils.HtmlElement)(_templateObject3(), baseStyles, sizeStyles);
exports.StyledHeading = StyledHeading;
var headings = {
  big: 'h1',
  normal: 'h2',
  small: 'h3'
};

function Heading(props) {
  var element = headings[props.size];
  return _react.default.createElement(StyledHeading, _extends({}, props, {
    element: element
  }));
}

Heading.propTypes = {
  /** The contents of the heading */
  children: _propTypes.default.string.isRequired,

  /** The size of the heading */
  size: _propTypes.default.oneOf(['small', 'normal', 'big'])
};
Heading.defaultProps = {
  size: 'big'
};
var _default = Heading;
exports.default = _default;