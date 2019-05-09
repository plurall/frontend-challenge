"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _Text = _interopRequireDefault(require("../Text/Text"));

var _Link = _interopRequireDefault(require("../Link/Link"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _themes = _interopRequireDefault(require("../themes"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  line-height: 0;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n  cursor: pointer;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 10px;\n  display: flex;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  margin-left: auto;\n  color: ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  margin-right: 8px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 8px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: solid 1px rgba(255, 189, 188, 0.4);\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: solid 1px rgba(241, 196, 15, 0.4);\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: solid 1px rgba(26, 188, 156, 0.4);\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: solid 1px rgba(73, 120, 187, 0.4);\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  margin-bottom: 30px;\n  border-radius: 8px;\n  border: solid 1px rgba(194, 201, 204, 0.4);\n  background-color: ", ";\n  display: flex;\n  justify-content: space-between;\n  padding 14px 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseStyles = (0, _reactEmotion.css)(_templateObject(), _themes.default.typography.fontFamily.default, _themes.default.colors.lightestGrey);

var importantStyles = function importantStyles(_ref) {
  var type = _ref.type;
  return type === 'importantInformation' && (0, _reactEmotion.css)(_templateObject2(), _themes.default.colors.lightBlue);
};

var successStyles = function successStyles(_ref2) {
  var type = _ref2.type;
  return type === 'success' && (0, _reactEmotion.css)(_templateObject3(), _themes.default.colors.lightGreen);
};

var attentionStyles = function attentionStyles(_ref3) {
  var type = _ref3.type;
  return type === 'attention' && (0, _reactEmotion.css)(_templateObject4(), _themes.default.colors.lightYellow);
};

var errorStyles = function errorStyles(_ref4) {
  var type = _ref4.type;
  return type === 'error' && (0, _reactEmotion.css)(_templateObject5(), _themes.default.colors.lightestRed);
};

var NameStyles = (0, _reactEmotion.css)(_templateObject6());
var ChildrenStyles = (0, _reactEmotion.css)(_templateObject7());
var LinkStyles = (0, _reactEmotion.css)(_templateObject8(), _themes.default.colors.darkGrey);
var AlertIconStyles = (0, _reactEmotion.css)(_templateObject9());
var CloseIconStyles = (0, _reactEmotion.css)(_templateObject10());
var StyledAlert = (0, _reactEmotion.default)('div')(_templateObject11(), baseStyles, importantStyles, successStyles, attentionStyles, errorStyles);
var Panel = (0, _reactEmotion.default)('div')(_templateObject12());
var Message = (0, _reactEmotion.default)('div')(_templateObject13());

var Alert =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Alert)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      closed: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        closed: true
      });
    });

    return _this;
  }

  _createClass(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          name = _this$props.name,
          children = _this$props.children,
          href = _this$props.href,
          hrefText = _this$props.hrefText;

      if (this.state.closed) {
        return null;
      }

      return _react.default.createElement(StyledAlert, {
        type: type
      }, _react.default.createElement(Panel, null, _react.default.createElement(_Icon.default, {
        className: AlertIconStyles,
        type: type,
        size: "small"
      }), _react.default.createElement(Message, null, name && _react.default.createElement(_Text.default, {
        className: NameStyles,
        bold: true,
        element: "span"
      }, "".concat(name, ":")), _react.default.createElement(_Text.default, {
        className: ChildrenStyles,
        element: "span"
      }, children))), _react.default.createElement(Panel, null, href && _react.default.createElement(_Link.default, {
        className: LinkStyles,
        href: href
      }, hrefText), _react.default.createElement(_Icon.default, {
        size: "small",
        className: CloseIconStyles,
        type: "close",
        onClick: this.handleClick
      })));
    }
  }]);

  return Alert;
}(_react.default.Component);

Alert.propTypes = {
  children: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  type: _propTypes.default.oneOf(['attention', 'importantInformation', 'subtleInformation', 'error', 'success']),
  href: _propTypes.default.string,
  hrefText: _propTypes.default.string
};
Alert.defaultProps = {
  type: 'subtleInformation'
};
var _default = Alert;
exports.default = _default;