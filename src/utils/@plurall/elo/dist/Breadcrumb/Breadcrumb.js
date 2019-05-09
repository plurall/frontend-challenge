"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Text = _interopRequireDefault(require("../Text/Text"));

var _themes = _interopRequireDefault(require("../themes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: 0.3px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 2px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 0 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n\n  &:hover {\n    color: ", ";\n    text-decoration-color: ", ";\n    border-bottom: 1px solid ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  line-height: 1.5;\n  letter-spacing: 0.3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var breadcrumbStyles = (0, _reactEmotion.css)(_templateObject(), _themes.default.typography.fontFamily.default);
var titleStyles = (0, _reactEmotion.css)(_templateObject2());
var BreadcrumbDiv = (0, _reactEmotion.default)('div')(_templateObject3(), breadcrumbStyles);
var TitleDiv = (0, _reactEmotion.default)('div')(_templateObject4(), titleStyles);
var LinkStyle = (0, _reactEmotion.css)(_templateObject5(), _themes.default.colors.secondary, _themes.default.colors.secondary, _themes.default.colors.baseGrey);
var IconStyle = (0, _reactEmotion.css)(_templateObject6());
var TextStyle = (0, _reactEmotion.css)(_templateObject7());
var PreviousTitle = (0, _reactEmotion.css)(_templateObject8(), _themes.default.colors.secondary);

var Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  function Breadcrumb() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Breadcrumb);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Breadcrumb)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderHeadings", function (content) {
      return _this.props.content.map(function (title, index) {
        var isLast = index === _this.props.content.length - 1;
        return _react.default.createElement(BreadcrumbDiv, {
          key: index
        }, _react.default.createElement(TitleDiv, {
          className: TextStyle
        }, _this.breadcrumbItem(title, isLast)), !isLast && _react.default.createElement(_Icon.default, {
          className: IconStyle,
          type: "arrow",
          size: "small"
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "breadcrumbItem", function (title, isLast) {
      if (!isLast) {
        return _react.default.createElement(_reactRouterDom.Link, {
          to: title.href,
          className: LinkStyle
        }, _react.default.createElement(_Text.default, {
          size: "small",
          className: PreviousTitle
        }, title.text));
      }

      return _react.default.createElement(_Text.default, {
        size: "small"
      }, title.text);
    });

    return _this;
  }

  _createClass(Breadcrumb, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(BreadcrumbDiv, null, this.renderHeadings());
    }
  }]);

  return Breadcrumb;
}(_react.default.Component);

Breadcrumb.propTypes = {
  content: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string.isRequired,
    href: _propTypes.default.string
  }).isRequired)
};
Breadcrumb.propTypes = {
  content: _propTypes.default.arrayOf(_propTypes.default.shape({
    href: ''
  }))
};
var _default = Breadcrumb;
exports.default = _default;