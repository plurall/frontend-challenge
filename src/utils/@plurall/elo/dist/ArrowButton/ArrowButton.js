"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrow = _interopRequireDefault(require("./arrow.svg"));

var _Button = _interopRequireDefault(require("../Button/Button"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 44px;\n  width: 44px;\n  padding: 0;\n  background-image: url(", ");\n  background-repeat: repeat-x;\n  background-position: 0px 50%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);\n  ", "\n\n  &:hover {\n    background-position: -44px 0px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  transform: rotate(90deg);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  transform: rotate(270deg);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transform: rotate(180deg);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rightArrowStyles = (0, _reactEmotion.css)(_templateObject());
var downArrowStyles = (0, _reactEmotion.css)(_templateObject2());
var upArrowStyles = (0, _reactEmotion.css)(_templateObject3());

var arrowStyles = function arrowStyles(_ref) {
  var direction = _ref.direction;
  return {
    'down': downArrowStyles,
    'right': rightArrowStyles,
    'up': upArrowStyles
  }[direction];
};

var StyledButton = (0, _reactEmotion.default)(_Button.default)(_templateObject4(), _arrow.default, arrowStyles);

var ArrowButton = function ArrowButton(props) {
  return _react.default.createElement(StyledButton, _extends({}, props, {
    type: "button"
  }));
};

ArrowButton.propTypes = {
  /** The direction the arrow points to */
  direction: _propTypes.default.oneOf(['left', 'down', 'right', 'up'])
};
ArrowButton.defaultProps = {
  direction: 'right'
};
var _default = ArrowButton;
exports.default = _default;