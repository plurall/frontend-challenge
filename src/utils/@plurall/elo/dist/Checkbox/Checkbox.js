"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _themes = _interopRequireDefault(require("../themes"));

var _checkMark = _interopRequireDefault(require("./checkMark.svg"));

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-right: 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n  font-family: ", ";\n  font-size: ", ";\n  ine-height: 1.43;\n  color: ", ";\n"]);

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
  var data = _taggedTemplateLiteral(["\n      border: 1px solid #e8eced;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      background-image: url(", ");\n      background-repeat: no-repeat;\n      background-position: 50% 50%;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 16px;\n  width: 16px;\n  display: inline-block;\n  border-radius: 2px;\n  box-sizing: border-box;\n  background-color: ", ";\n\n  &:hover {\n    border-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var inputStyles = (0, _reactEmotion.css)(_templateObject());
var baseStyles = (0, _reactEmotion.css)(_templateObject2(), _themes.default.colors.white, _themes.default.colors.baseGreen);

var checkedStyles = function checkedStyles(_ref) {
  var checked = _ref.checked;
  return checked ? (0, _reactEmotion.css)(_templateObject3(), _themes.default.colors.baseGreen, _checkMark.default) : (0, _reactEmotion.css)(_templateObject4());
};

var Input = (0, _reactEmotion.default)('span')(_templateObject5(), baseStyles, checkedStyles);
var labelTextStyles = (0, _reactEmotion.css)(_templateObject6(), _themes.default.typography.fontFamily.default, _themes.default.typography.text.normal.fontsize, _themes.default.colors.darkestGrey);
var labelStyles = (0, _reactEmotion.css)(_templateObject7());

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      if (_this.props.onChange) {
        var _event$target = event.target,
            checked = _event$target.checked,
            name = _event$target.name,
            value = _event$target.value;

        _this.props.onChange({
          checked: checked,
          name: name,
          value: value
        });
      }
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          label = _this$props.label,
          name = _this$props.name,
          value = _this$props.value;
      return _react.default.createElement("label", {
        className: labelStyles
      }, _react.default.createElement("input", {
        type: "checkbox",
        className: inputStyles,
        onChange: this.handleChange,
        checked: checked,
        name: name,
        value: value
      }), _react.default.createElement(Input, this.props), label && _react.default.createElement("span", {
        className: labelTextStyles
      }, label));
    }
  }]);

  return Checkbox;
}(_react.default.Component);

Checkbox.propTypes = {
  /** Controls checked state of checkbox */
  checked: _propTypes.default.bool,

  /** Function called when checkbox changes */
  onChange: _propTypes.default.func,

  /** Identifies a group of checkboxes */
  name: _propTypes.default.string,

  /** Value of a checkbox. It must be unique inside a group */
  value: _propTypes.default.string,

  /** Label associated with the checkbox */
  label: _propTypes.default.string
};
Checkbox.defaultProps = {
  checked: false,
  value: ''
};
var _default = Checkbox;
exports.default = _default;