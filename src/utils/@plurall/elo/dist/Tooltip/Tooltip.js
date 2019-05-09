"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _themes = _interopRequireDefault(require("../themes"));

var _reactEmotion = require("react-emotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  white-space: initial;\n\n  & .", " {\n    visibility: hidden;\n    opacity: 0;\n  }\n\n  &:hover .", " {\n    visibility: visible;\n    opacity: 1;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: unset;\n  position: absolute;\n  width: 250px;\n  color: ", ";\n  background-color: ", ";\n  font-size: 12px;\n  font-family: ", ";\n  font-weight: 300;\n  padding: 8px 10px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  line-height: 1.5;\n  letter-spacing: 0.3px;\n  transition: opacity 200ms ease 0s, transform 200ms ease 0s;\n  z-index: 1;\n\n  &:after {\n    position: absolute;\n    content: '';\n    border-width: 7px;\n    border-style: solid;\n    border-color: ", " transparent transparent transparent;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    transform: translate(calc(", "px - 50%), calc(-100% - 10px));\n\n    &:after {\n      top: 100%;\n      left: calc(", "px - 7.5px);\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    transform: translate(\n      calc(", "px + 10px),\n      calc(", "px - 50%)\n    );\n\n    &:after {\n      left: -5%;\n      transform: translateY(calc(", "px + 20px)) rotate(90deg);\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    transform: translate(calc(-100% - 10px), calc(", "px - 50%));\n\n    &:after {\n      left: 100%;\n      transform: translateY(calc(", "px + 20px)) rotate(270deg);\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    transform: translate(\n      calc(", "px - 50%),\n      calc(", "px + 10px)\n    );\n\n    &:after {\n      bottom: 100%;\n      left: calc(", "px - 7.5px);\n      transform: rotate(180deg);\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      contentHeight: null,
      contentWidth: null,
      height: null,
      width: null
    });

    _defineProperty(_assertThisInitialized(_this), "keyContainer", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "keyContent", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.setState({
        width: _this.keyContainer.current.offsetWidth,
        height: _this.keyContainer.current.offsetHeight,
        contentHeight: _this.keyContent.current.offsetHeight,
        contentWidth: _this.keyContent.current.offsetWidth
      }, function () {
        if (!_this.props.position) {
          window.addEventListener('resize', _this.setPosition);

          _this.setPosition();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function () {
      var _this$keyContent$curr = _this.keyContent.current.getBoundingClientRect(),
          left = _this$keyContent$curr.left,
          right = _this$keyContent$curr.right,
          top = _this$keyContent$curr.top;

      var viewportWidth = window.innerWidth;

      if (left < 0) {
        _this.setState({
          position: 'right'
        });

        return;
      }

      if (top < 0) {
        _this.setState({
          position: 'bottom'
        });

        return;
      }

      if (right > viewportWidth) {
        _this.setState({
          position: 'left'
        });

        return;
      }

      _this.setState({
        position: 'top'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getBottomStyle", function () {
      return (0, _reactEmotion.css)(_templateObject(), _this.state.width / 2, _this.state.height, _this.state.contentWidth / 2);
    });

    _defineProperty(_assertThisInitialized(_this), "getLeftStyle", function () {
      return (0, _reactEmotion.css)(_templateObject2(), _this.state.height / 2, -_this.state.contentHeight / 2);
    });

    _defineProperty(_assertThisInitialized(_this), "getRightStyle", function () {
      return (0, _reactEmotion.css)(_templateObject3(), _this.state.width, _this.state.height / 2, -_this.state.contentHeight / 2);
    });

    _defineProperty(_assertThisInitialized(_this), "getTopStyle", function () {
      return (0, _reactEmotion.css)(_templateObject4(), _this.state.width / 2, _this.state.contentWidth / 2);
    });

    _defineProperty(_assertThisInitialized(_this), "getPosition", function () {
      switch (_this.props.position || _this.state.position) {
        case 'right':
          return _this.getRightStyle();

        case 'bottom':
          return _this.getBottomStyle();

        case 'left':
          return _this.getLeftStyle();

        default:
          return _this.getTopStyle();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          getPosition = _assertThisInitialize.getPosition,
          _assertThisInitialize2 = _assertThisInitialize.props,
          children = _assertThisInitialize2.children,
          content = _assertThisInitialize2.content;

      return _react.default.createElement("div", {
        ref: _this.keyContainer,
        className: tooltipContainer()
      }, _react.default.createElement("p", {
        ref: _this.keyContent,
        className: "".concat(tooltip, " ").concat(getPosition())
      }, content), _react.default.createElement("div", null, children));
    });

    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setPosition);
    }
  }]);

  return Tooltip;
}(_react.default.Component);

_defineProperty(Tooltip, "propTypes", {
  children: _propTypes.default.node.isRequired,
  content: _propTypes.default.string.isRequired,
  position: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right'])
});

var _default = Tooltip;
exports.default = _default;
var tooltip = (0, _reactEmotion.css)(_templateObject5(), _themes.default.colors.white, _themes.default.colors.darkestGrey, _themes.default.typography.fontFamily.default, _themes.default.colors.darkestGrey);

var tooltipContainer = function tooltipContainer() {
  return (0, _reactEmotion.css)(_templateObject6(), tooltip, tooltip);
};