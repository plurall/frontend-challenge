"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _Text = _interopRequireDefault(require("../Text/Text"));

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -11px;\n  left: 5px;\n  background-color: ", ";\n  padding: 0 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  border: solid 1px ", ";\n  position: relative;\n  padding-top: 20px;\n  margin-top: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMenuGroup = (0, _reactEmotion.default)('div')(_templateObject(), _themes.default.colors.lightestGrey);
var TitleContainer = (0, _reactEmotion.default)('div')(_templateObject2(), _themes.default.colors.white);
var Title = (0, _reactEmotion.default)(_Text.default)(_templateObject3(), _themes.default.colors.baseGrey);

var MenuGroup = function MenuGroup(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react.default.createElement(StyledMenuGroup, null, _react.default.createElement(TitleContainer, null, _react.default.createElement(Title, {
    element: "span",
    bold: true
  }, title)), children);
};

MenuGroup.propTypes = {
  /** The contents of the MenuGroup */
  children: _propTypes.default.node.isRequired,

  /** The name of the group */
  title: _propTypes.default.string.isRequired
};
var _default = MenuGroup;
exports.default = _default;