"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  box-shadow: ", ";\n  border: solid 1px ", ";\n  background-color: ", ";\n  padding: 10px;\n  width: 100%;\n  max-height: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  overflow-y: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMenu = (0, _reactEmotion.default)('ul')(_templateObject(), _themes.default.shadows.liftedSurface, _themes.default.colors.whiteSmoke, _themes.default.colors.white);

var Menu = function Menu(_ref) {
  var children = _ref.children;
  return _react.default.createElement(StyledMenu, null, children);
};

Menu.propTypes = {
  /** The contents of the menu */
  children: _propTypes.default.node.isRequired
};
var _default = Menu;
exports.default = _default;