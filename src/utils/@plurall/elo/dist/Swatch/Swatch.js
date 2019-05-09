"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _Text = _interopRequireDefault(require("../Text/Text"));

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-right: 10px;\n    margin-bottom: 20px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    box-shadow: rgba(12, 15, 20, 0.0196078) 0px 0px 0px 1px,\n      rgba(12, 15, 20, 0.0588235) 0px 0px 1px 0px,\n      rgba(12, 15, 20, 0.0588235) 0px 2px 2px 0px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    content: '", "';\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    background-color: ", ";\n    display: inline-block;\n  "]);

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

var SWATCH_HEIGHT = '150px';
var SWATCH_WIDTH = '135px';
var Color = (0, _reactEmotion.default)('div')(_templateObject(), function (_ref) {
  var colorName = _ref.colorName;
  return (0, _reactEmotion.css)(_templateObject2(), SWATCH_HEIGHT, SWATCH_WIDTH, _themes.default.colors[colorName]);
});
var ColorName = (0, _reactEmotion.default)('div')(_templateObject3(), function (_ref2) {
  var colorName = _ref2.colorName;
  return (0, _reactEmotion.css)(_templateObject4(), colorName);
});
var ColorHex = (0, _reactEmotion.default)(_Text.default)(_templateObject5(), function () {
  return (0, _reactEmotion.css)(_templateObject6(), _themes.default.colors.darkPlurall);
});
var ColorWrapper = (0, _reactEmotion.default)('div')(_templateObject7(), function () {
  return (0, _reactEmotion.css)(_templateObject8());
});

var Swatch = function Swatch(_ref3) {
  var colorName = _ref3.colorName;
  return _react.default.createElement(ColorWrapper, null, _react.default.createElement(Color, {
    colorName: colorName
  }), _react.default.createElement(ColorName, null, _react.default.createElement(ColorHex, {
    element: "span",
    size: "normal",
    noMargin: true
  }, _themes.default.colors[colorName]), _react.default.createElement(_Text.default, {
    bold: true,
    element: "span",
    size: "normal",
    noMargin: true
  }, colorName)));
};

Swatch.propTypes = {
  colorName: _propTypes.default.string.isRequired
};
var _default = Swatch;
exports.default = _default;