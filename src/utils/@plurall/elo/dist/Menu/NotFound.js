"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = require("react-emotion");

var _Text = _interopRequireDefault(require("../Text/Text"));

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var notFoundStyles = (0, _reactEmotion.css)(_templateObject(), _themes.default.colors.lightestRed, _themes.default.shadows.liftedSurface);

var NotFound = function NotFound(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: notFoundStyles
  }, _react.default.createElement(_Text.default, {
    element: "span"
  }, children));
};

NotFound.propTypes = {
  children: _propTypes.default.string.isRequired
};
var _default = NotFound;
exports.default = _default;