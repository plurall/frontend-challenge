"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSvg = _interopRequireDefault(require("react-svg"));

var _reactEmotion = require("react-emotion");

var _themes = _interopRequireDefault(require("../themes"));

var _arrow = _interopRequireDefault(require("./arrow.svg"));

var _attention = _interopRequireDefault(require("./attention.svg"));

var _close = _interopRequireDefault(require("./close.svg"));

var _download = _interopRequireDefault(require("./download.svg"));

var _error = _interopRequireDefault(require("./error.svg"));

var _externalLink = _interopRequireDefault(require("./externalLink.svg"));

var _filter = _interopRequireDefault(require("./filter.svg"));

var _help = _interopRequireDefault(require("./help.svg"));

var _importantInformation = _interopRequireDefault(require("./importantInformation.svg"));

var _order = _interopRequireDefault(require("./order.svg"));

var _orderAscending = _interopRequireDefault(require("./orderAscending.svg"));

var _orderDescending = _interopRequireDefault(require("./orderDescending.svg"));

var _subtleInformation = _interopRequireDefault(require("./subtleInformation.svg"));

var _success = _interopRequireDefault(require("./success.svg"));

var _statsPositive = _interopRequireDefault(require("./statsPositive.svg"));

var _statsNegative = _interopRequireDefault(require("./statsNegative.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: ", ";\n    width: ", ";\n    display: flex;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var icons = {
  arrow: _arrow.default,
  attention: _attention.default,
  close: _close.default,
  download: _download.default,
  error: _error.default,
  externalLink: _externalLink.default,
  filter: _filter.default,
  help: _help.default,
  importantInformation: _importantInformation.default,
  order: _order.default,
  orderAscending: _orderAscending.default,
  orderDescending: _orderDescending.default,
  subtleInformation: _subtleInformation.default,
  success: _success.default,
  statsPositive: _statsPositive.default,
  statsNegative: _statsNegative.default
};
var iconsSizing = {
  arrow: 12,
  filter: 12,
  statsPositive: 12,
  statsNegative: 12,
  attention: 16,
  close: 16,
  download: 16,
  error: 16,
  externalLink: 16,
  help: 16,
  importantInformation: 16,
  order: 12,
  orderAscending: 12,
  orderDescending: 12,
  subtleInformation: 16,
  success: 16
};

var sizeStyles = function sizeStyles(_ref) {
  var size = _ref.size,
      type = _ref.type;
  return (0, _reactEmotion.css)(_templateObject(), _themes.default.iconsSizes.base[iconsSizing[type]][size].size, _themes.default.iconsSizes.base[iconsSizing[type]][size].size);
};

var Icon = function Icon(props) {
  return React.createElement("div", props, React.createElement(_reactSvg.default, {
    svgClassName: sizeStyles(props),
    src: icons[props.type]
  }));
};

Icon.propTypes = {
  /** The icon chosen to be shown */
  type: _propTypes.default.oneOf(['arrow', 'attention', 'close', 'download', 'error', 'externalLink', 'filter', 'help', 'importantInformation', 'order', 'orderAscending', 'orderDescending', 'subtleInformation', 'success', 'statsPositive', 'statsNegative']).isRequired,

  /** Icon size. */
  size: _propTypes.default.oneOf(['small', 'normal', 'big'])
};
Icon.defaultProps = {
  size: 'normal'
};
var _default = Icon;
exports.default = _default;