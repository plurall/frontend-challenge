"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  cursor: pointer;\n  text-decoration: none;\n\n  &:hover {\n    color: ", ";\n    text-decoration: underline;\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseStyles = (0, _reactEmotion.css)(_templateObject(), _themes.default.colors.darkGrey, _themes.default.typography.fontFamily.default, _themes.default.typography.fontWeight.bold, _themes.default.colors.darkestGrey);

var secondaryStyles = function secondaryStyles(_ref) {
  var secondary = _ref.secondary;
  return secondary && (0, _reactEmotion.css)(_templateObject2(), _themes.default.colors.darkGreen, _themes.default.colors.baseGreen);
};

var sizeStyles = function sizeStyles(_ref2) {
  var size = _ref2.size;
  return (0, _reactEmotion.css)(_templateObject3(), _themes.default.typography.text[size].fontsize);
};

var StyledLink = (0, _reactEmotion.default)('a')(_templateObject4(), baseStyles, sizeStyles, secondaryStyles);

function Link(props) {
  var children = props.children,
      href = props.href;
  return _react.default.createElement(StyledLink, props, children || href);
}

Link.propTypes = {
  /** The contents of the link */
  children: _propTypes.default.node,

  /** Render the link with secondary styles */
  secondary: _propTypes.default.bool,

  /** Specifies the size of the link */
  size: _propTypes.default.oneOf(['small', 'normal', 'big']),

  /** Specifies the URL of the page the link goes to */
  href: _propTypes.default.string.isRequired,

  /** Specifies where to open the linked document */
  target: _propTypes.default.string,

  /** Callback called when link is clicked */
  onClick: _propTypes.default.func
};
Link.defaultProps = {
  size: 'normal',
  target: '_self',
  href: '#'
};
var _default = Link;
exports.default = _default;