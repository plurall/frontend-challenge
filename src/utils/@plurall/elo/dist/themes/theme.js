"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shadows = exports.typography = exports.iconsSizes = exports.colors = void 0;

var _webfontloader = _interopRequireDefault(require("webfontloader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_webfontloader.default.load({
  google: {
    families: ['Nunito', 'Open Sans', 'sans-serif']
  }
});

var blacks = {
  black: '#000000',
  washedOutBlack: '#222526'
};
var greys = {
  darkestGrey: '#494c4d',
  darkGrey: '#777b7d',
  baseGrey: '#8d9496',
  lightGrey: '#c2c9cc',
  lightestGrey: '#e9eced'
};
var whites = {
  whiteSmoke: '#f2f4f5',
  whiteSnow: '#fafcfc',
  white: '#ffffff'
};
var pluralls = {
  darkestPlurall: '#333354',
  darkPlurall: '#49497f',
  basePlurall: '#5a5aa3',
  secondaryPlurall: '#7878cb',
  lightPlurall: '#cfcffe',
  lightestPlurall: '#f2f2ff'
};
var greens = {
  darkGreen: '#13866f',
  baseGreen: '#1abc9c',
  lightGreen: '#c5ede5',
  secondaryGreen: '#00c782'
};
var yellows = {
  darkYellow: '#be9e1e',
  baseYellow: '#f1c40f',
  lightYellow: '#fff5cd',
  lightestYellow: '#fffbeb'
};
var reds = {
  darkRed: '#b8403e',
  baseRed: '#f06361',
  lightRed: '#ffbdbc',
  lightestRed: '#fff0f0'
};
var blues = {
  darkBlue: '#26589e',
  baseBlue: '#4978bb',
  lightBlue: '#dae6f8',
  lightestBlue: '#f5f7fa'
};
var violets = {
  darkViolet: '#713e80',
  baseViolet: '#a056b5',
  lightViolet: '#eed4f5',
  lightestViolet: '#f3ecf5'
};

var colors = _objectSpread({}, blacks, blues, greens, greys, pluralls, reds, violets, whites, yellows, {
  primary: greys.darkestGrey,
  secondary: greys.baseGrey
});

exports.colors = colors;
var iconsSizes = {
  base: {
    16: {
      big: {
        size: '64px'
      },
      normal: {
        size: '32px'
      },
      small: {
        size: '16px'
      }
    },
    12: {
      big: {
        size: '48px'
      },
      normal: {
        size: '24px'
      },
      small: {
        size: '12px'
      }
    }
  }
};
exports.iconsSizes = iconsSizes;
var typography = {
  fontFamily: {
    default: "'Open Sans', sans-serif;",
    nunito: 'Nunito'
  },
  fontWeight: {
    bold: 700,
    regular: 400
  },
  text: {
    big: {
      fontsize: '16px',
      lineHeight: '24px'
    },
    normal: {
      fontsize: '14px',
      lineHeight: '20px'
    },
    small: {
      fontsize: '12px',
      lineHeight: '18px'
    }
  },
  heading: {
    big: {
      fontsize: '30px',
      lineHeight: '36px'
    },
    normal: {
      fontsize: '25px',
      lineHeight: '30px'
    },
    small: {
      fontsize: '20px',
      lineHeight: '26px'
    }
  }
};
exports.typography = typography;
var shadows = {
  groundSurface: '0 1px 1px 0 rgba(0, 0, 0, 0.2)',
  nearSurface: '0 5px 10px -5px rgba(0, 0, 0, 0.1)',
  liftedSurface: '0 8px 8px 0 rgba(0, 0, 0, 0.1)'
};
exports.shadows = shadows;