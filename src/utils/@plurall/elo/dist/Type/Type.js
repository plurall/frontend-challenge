"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _Text = _interopRequireDefault(require("../../components/Text/Text"));

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    margin-left: 10px;\n    text-transform: lowercase;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TypePx = (0, _reactEmotion.default)(_Text.default)(_templateObject(), function () {
  return (0, _reactEmotion.css)(_templateObject2(), _themes.default.colors.darkGrey);
});

var Type = function Type(_ref) {
  var size = _ref.size,
      component = _ref.component,
      name = _ref.name,
      fontWeight = _ref.fontWeight,
      props = _objectWithoutProperties(_ref, ["size", "component", "name", "fontWeight"]);

  var typeSetting = _themes.default.typography[name][size];
  var fontsize = typeSetting.fontsize,
      lineHeight = typeSetting.lineHeight;
  var weight = _themes.default.typography.fontWeight[fontWeight];
  return _react.default.createElement(component, _objectSpread({
    children: _react.default.createElement(_react.default.Fragment, null, "A better way to get ", size, ".", _react.default.createElement(TypePx, {
      element: "span",
      size: "small"
    }, weight ? "".concat(weight) : "".concat(fontsize, ", ").concat(lineHeight))),
    size: size
  }, props));
};

Type.propTypes = {
  component: _propTypes.default.func.isRequired,
  // eslint-disable-line
  size: _propTypes.default.string.isRequired,
  fontWeight: _propTypes.default.string,
  name: _propTypes.default.string.isRequired
};
Type.defaultProps = {
  fontWeight: null
};
var _default = Type;
exports.default = _default;