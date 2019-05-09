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
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      cursor: pointer;\n      transition: all 300ms ease;\n\n      &:hover {\n        background-color: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      opacity: 0.4;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  border-radius: 22px;\n  border-width: 0;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: bold;\n  min-height: 40px;\n  text-transform: uppercase;\n  padding: 10px 30px;\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseStyles = (0, _reactEmotion.css)(_templateObject(), _themes.default.colors.white, _themes.default.typography.fontFamily.default, _themes.default.typography.text.normal.fontsize);

var disabledStyles = function disabledStyles(_ref) {
  var disabled = _ref.disabled;
  return disabled ? (0, _reactEmotion.css)(_templateObject2(), _themes.default.colors.baseGreen) : (0, _reactEmotion.css)(_templateObject3(), _themes.default.colors.baseGreen, _themes.default.colors.darkGreen);
};

var StyledButton = (0, _reactEmotion.default)('button')(_templateObject4(), baseStyles, disabledStyles);

var Button = function Button(props) {
  return _react.default.createElement(StyledButton, props);
};

Button.propTypes = {
  /** Indicates that the button is disabled */
  disabled: _propTypes.default.bool,

  /** The type of the button */
  type: _propTypes.default.oneOf(['button', 'submit', 'reset']),

  /** A calback to be called when the button is clicked */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  disabled: false,
  type: 'button',
  onClick: function onClick() {
    return null;
  }
};
var _default = Button;
exports.default = _default;