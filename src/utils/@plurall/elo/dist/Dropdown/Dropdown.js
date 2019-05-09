"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = require("react-emotion");

var _Text = _interopRequireDefault(require("../Text/Text"));

var _Menu = require("../Menu");

var _themes = _interopRequireDefault(require("../themes"));

var _arrow = _interopRequireDefault(require("./arrow.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  height: 1px;\n  background-color: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: initial;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50px;\n  left: 0;\n  max-width: 380px;\n  height: 460px;\n  display: none;\n  z-index: 10;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        ", ";\n        ", "\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background-image: url(", ");\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  width: 35px;\n  height: 40px;\n  top: 0;\n  right: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        ", ";\n        ", "\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  background-color: ", ";\n  color: ", ";\n  padding: 0 35px 0 10px;\n  font-size: 14px;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  border: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.4;\n  cursor: initial;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  border: 1px solid ", ";\n  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 0 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var nameStyles = (0, _reactEmotion.css)(_templateObject());
var dropdownContentStyles = (0, _reactEmotion.css)(_templateObject2());
var buttonWrapperStyles = (0, _reactEmotion.css)(_templateObject3(), _themes.default.colors.lightestGrey);
var disabledStyles = (0, _reactEmotion.css)(_templateObject4());
var buttonStyles = (0, _reactEmotion.css)(_templateObject5(), _themes.default.colors.white, _themes.default.colors.darkestGrey);

var fetchButtonStyles = function fetchButtonStyles(disabled) {
  return disabled ? (0, _reactEmotion.css)(_templateObject6(), buttonStyles, disabledStyles) : buttonStyles;
};

var arrowStyles = (0, _reactEmotion.css)(_templateObject7(), _arrow.default);

var fetchArrowStyles = function fetchArrowStyles(disabled) {
  return disabled ? (0, _reactEmotion.css)(_templateObject8(), arrowStyles, disabledStyles) : arrowStyles;
};

var menuWrapperStyles = (0, _reactEmotion.css)(_templateObject9());
var visibleStyles = (0, _reactEmotion.css)(_templateObject10());
var dividerStyles = (0, _reactEmotion.css)(_templateObject11(), _themes.default.colors.whiteSmoke);

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      if (_this.wrapper && !_this.wrapper.contains(event.target)) {
        _this.setState({
          expanded: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (item) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          selected = _this$props.selected,
          multiselect = _this$props.multiselect;

      if (!multiselect) {
        _this.setState({
          expanded: false
        });

        onChange && onChange(item.id);
        return;
      }

      if (!onChange) {
        return;
      }

      var isSelected = !!selected.find(function (value) {
        return value === item.id;
      });
      var newSelected = isSelected ? selected.filter(function (value) {
        return value !== item.id;
      }) : [].concat(_toConsumableArray(selected), [item.id]);
      onChange(newSelected);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectAll", function () {
      var _this$props2 = _this.props,
          items = _this$props2.items,
          onChange = _this$props2.onChange;
      var newSelected = _this.allSelected() ? [] : items.map(function (item) {
        return item.id;
      });
      onChange && onChange(newSelected);
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function () {
      if (_this.props.disabled) return;

      _this.setState({
        expanded: !_this.state.expanded
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnBlur", function () {
      if (!_this.props.multiselect) {
        _this.setState({
          expanded: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setWrapper", function (node) {
      _this.wrapper = node;
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('touchstart', this.handleClickOutside);
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('touchstart', this.handleClickOutside);
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "allSelected",
    value: function allSelected() {
      var _this$props3 = this.props,
          items = _this$props3.items,
          selected = _this$props3.selected,
          multiselect = _this$props3.multiselect;

      if (!multiselect || !selected) {
        return false;
      }

      return items.every(function (item) {
        return selected.includes(item.id);
      });
    }
  }, {
    key: "buttonText",
    value: function buttonText() {
      var _this$props4 = this.props,
          placeholder = _this$props4.placeholder,
          multiselect = _this$props4.multiselect,
          selected = _this$props4.selected,
          items = _this$props4.items,
          _this$props4$buttonLa = _this$props4.buttonLabel,
          singular = _this$props4$buttonLa.singular,
          plural = _this$props4$buttonLa.plural;
      var selectedItemsCount = (selected || []).length;

      if (multiselect) {
        var label = selectedItemsCount === 1 ? singular : plural;
        return selectedItemsCount === 0 ? placeholder : "".concat(selectedItemsCount, " ").concat(label);
      } else {
        return selected ? items.find(function (item) {
          return item.id === selected;
        }).value : placeholder;
      }
    }
  }, {
    key: "renderSelectAll",
    value: function renderSelectAll() {
      if (!this.props.multiselect) {
        return null;
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Menu.MenuItem, {
        withCheck: true,
        selected: this.allSelected(),
        onClick: this.handleSelectAll
      }, "Marcar / Desmarcar todas"), _react.default.createElement("div", {
        className: dividerStyles
      }));
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var _this2 = this;

      var multiselect = this.props.multiselect;
      var selected = multiselect ? this.props.selected.includes(item.id) : this.props.selected === item.id;
      return _react.default.createElement(_Menu.MenuItem, {
        key: item.id,
        withCheck: multiselect,
        selected: selected,
        onClick: function onClick() {
          return _this2.handleClick(item);
        }
      }, item.value);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this3 = this;

      return this.props.items.map(function (item) {
        return _this3.renderItem(item);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          name = _this$props5.name,
          disabled = _this$props5.disabled;
      return _react.default.createElement("div", {
        ref: this.setWrapper
      }, name && _react.default.createElement(_Text.default, {
        secondary: true,
        className: nameStyles,
        size: "small"
      }, name), _react.default.createElement("div", {
        className: dropdownContentStyles
      }, _react.default.createElement("div", {
        className: buttonWrapperStyles
      }, _react.default.createElement("input", {
        className: fetchButtonStyles(disabled),
        type: "button",
        onBlur: this.handleOnBlur,
        onClick: this.handleButtonClick,
        value: this.buttonText()
      }), _react.default.createElement("span", {
        className: fetchArrowStyles(disabled),
        onClick: this.handleButtonClick
      })), _react.default.createElement("div", {
        className: (0, _reactEmotion.cx)(menuWrapperStyles, _defineProperty({}, visibleStyles, this.state.expanded))
      }, _react.default.createElement(_Menu.Menu, null, this.renderSelectAll(), this.renderItems()))));
    }
  }]);

  return Dropdown;
}(_react.default.Component);

Dropdown.propTypes = {
  /** Singular and plural versions of the label to be shown on a multiselect
   *  dropdown when at least one item is selected
   */
  buttonLabel: _propTypes.default.shape({
    singular: _propTypes.default.string.isRequired,
    plural: _propTypes.default.string.isRequired
  }),

  /** An array of data describing the dropdown content. Each item must have
   * a value and an id
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.string.isRequired,
    id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
  })).isRequired,

  /** Indicates that the dropdown allows multiselection */
  multiselect: _propTypes.default.bool,

  /** The dropdown name, rendered on top of it */
  name: _propTypes.default.string,

  /** A callback to be called when the user clicks on an item.
   * In a single select dropdown, it receives the id of the clicked item.
   * If the dropdown allows multiselect, it receives an array with all the
   * selected items ids.
   */
  onChange: _propTypes.default.func,

  /** The text shown on the dropdown button when no item is selected */
  placeholder: _propTypes.default.string,

  /** The id of the currently selected item, or, in the case of a multiselect
   * dropdown, an array containing the ids of the selected items.
   */
  selected: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]), _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]))]),

  /** A boolean and renders the dropdown unopenable */
  disabled: _propTypes.default.bool
};
Dropdown.defaultProps = {
  buttonLabel: {
    singular: 'item',
    plural: 'items'
  },
  placeholder: 'Selecione'
};
var _default = Dropdown;
exports.default = _default;