"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../Text/Text"));

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: ", "%;\n    height: 100%;\n    animation: ", " 1s ease-out forwards;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    from { width: 0; } to { width: ", "%; }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 3px;\n  border-radius: 4px;\n  line-height: 1.43;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseStyles = (0, _reactEmotion.css)(_templateObject(), _themes.default.colors.lightestGrey);

var percentageFilledStyles = function percentageFilledStyles(_ref) {
  var percentage = _ref.percentage;
  var animation = (0, _reactEmotion.keyframes)(_templateObject2(), percentage);
  return (0, _reactEmotion.css)(_templateObject3(), percentage, animation);
};

var thresholdStyles = function thresholdStyles(_ref2) {
  var threshold = _ref2.threshold,
      percentage = _ref2.percentage;
  var color = percentage >= threshold ? _themes.default.colors.secondaryGreen : _themes.default.colors.baseRed;
  return (0, _reactEmotion.css)(_templateObject4(), color);
};

var PercentageFilled = (0, _reactEmotion.default)('div')(_templateObject5(), percentageFilledStyles, thresholdStyles);
var StyledProgressBar = (0, _reactEmotion.default)('div')(_templateObject6(), baseStyles);

function ProgressBar(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return _react.default.createElement("div", null, _react.default.createElement(_Text.default, null, children), _react.default.createElement(StyledProgressBar, null, _react.default.createElement(PercentageFilled, rest)));
}

ProgressBar.propTypes = {
  /** Holds the information the bar is yielding */
  children: _propTypes.default.string.isRequired,

  /** Threshold that makes the green color of the bar go red, between 0 and 100 */
  threshold: _propTypes.default.number.isRequired,

  /** The amount of filling the progress bar has, between 0 and 100 */
  percentage: _propTypes.default.number.isRequired
};
var _default = ProgressBar;
exports.default = _default;