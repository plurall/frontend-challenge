"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var HtmlElement = function HtmlElement(_ref) {
  var element = _ref.element,
      children = _ref.children,
      className = _ref.className;
  return (0, _react.createElement)(element, {
    className: className
  }, children);
};

var _default = HtmlElement;
exports.default = _default;