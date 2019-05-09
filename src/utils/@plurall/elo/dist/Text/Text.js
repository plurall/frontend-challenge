"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-style: italic;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-weight: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: ", ";\n  margin: 0;\n  min-height: 20px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseStyles = (0, _reactEmotion.css)(_templateObject(), _themes.default.typography.fontFamily.default, _themes.default.colors.primary);

var boldStyles = function boldStyles(_ref) {
  var bold = _ref.bold;
  return bold && (0, _reactEmotion.css)(_templateObject2(), _themes.default.typography.fontWeight.bold);
};

var italicStyles = function italicStyles(_ref2) {
  var italic = _ref2.italic;
  return italic && (0, _reactEmotion.css)(_templateObject3());
};

var secondaryStyles = function secondaryStyles(_ref3) {
  var secondary = _ref3.secondary;
  return secondary && (0, _reactEmotion.css)(_templateObject4(), _themes.default.colors.secondary);
};

var disabledStyles = function disabledStyles(_ref4) {
  var disabled = _ref4.disabled;
  return disabled && (0, _reactEmotion.css)(_templateObject5(), _themes.default.colors.lightGrey);
};

var sizeStyles = function sizeStyles(_ref5) {
  var size = _ref5.size;
  return (0, _reactEmotion.css)(_templateObject6(), _themes.default.typography.text[size].fontsize);
};

var StyledText = (0, _reactEmotion.default)(_utils.HtmlElement)(_templateObject7(), baseStyles, sizeStyles, boldStyles, italicStyles, secondaryStyles, disabledStyles);

function Text(props) {
  return _react.default.createElement(StyledText, props);
}

Text.propTypes = {
  /** Render the text with bold styles */
  bold: _propTypes.default.bool,

  /** The contents of the text */
  children: _propTypes.default.node.isRequired,

  /** Render the component with disabled styles */
  disabled: _propTypes.default.bool,

  /** The html element used to render the text */
  element: _propTypes.default.oneOf(['span', 'p']),

  /** Render the text with italic styles */
  italic: _propTypes.default.bool,

  /** Render the text with secondary styles */
  secondary: _propTypes.default.bool,

  /** Specifies the size of the text */
  size: _propTypes.default.oneOf(['small', 'normal', 'big'])
};
Text.defaultProps = {
  element: 'p',
  size: 'normal'
};
var _default = Text;
exports.default = _default;