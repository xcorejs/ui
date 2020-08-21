'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var core = require('@styled-system/core');
var polished = require('polished');
var React = require('react');
var React__default = _interopDefault(React);
var AnimateHeight = _interopDefault(require('react-animate-height'));
var loremIpsum = require('lorem-ipsum');
var Portal = _interopDefault(require('@reach/portal'));
var useDebounce = require('use-debounce');

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var merge = function merge(target) {
  var next = appendTo({}, target);

  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (s) {
    return appendTo(next, s);
  });
  return appendTo({}, next);
};

var appendTo = function appendTo(t, s) {
  Object.keys(s).reverse().forEach(function (k) {
    t[k] && k[0] === '_' && _typeof(t[k]) === 'object' ? appendTo(t[k], s[k]) : !(k in t) && (t[k] = s[k]);
  });
  return t;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var mergeThemes = function mergeThemes(target, source) {
  return target ? mergeThemePair(target, source) : source;
};

var mergeThemePair = function mergeThemePair(target, source) {
  var next = _objectSpread(_objectSpread({}, target), {}, {
    default: target.default ? merge(target.default, source.default) : source.default
  });

  Object.keys(source).forEach(function (k) {
    return k !== 'default' && (next[k] = mergeVariantPair(target[k], source[k]));
  });
  return next;
};

var mergeVariantPair = function mergeVariantPair(target, source) {
  var next = _objectSpread({}, target);

  Object.keys(source).forEach(function (k) {
    next[k] = target && target[k] ? merge(target[k], source[k]) : source[k];
  });
  return next;
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var scale = function scale(values, aliases) {
  var s = aliases.reduce(function (acc, val, i) {
    // @ts-ignore
    acc[val] = values[i];
    return acc;
  }, _toConsumableArray(values));
  s.aliases = aliases;
  return s;
};
var defaultsScale = function defaultsScale(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return sources.reduce(function (acc, source) {
    return defaultsScalePair(acc, source);
  }, target);
};

var defaultsScalePair = function defaultsScalePair(t, s) {
  return Object.keys(s).reduce(function (acc, k) {
    var _acc$k;

    return _objectSpread$1(_objectSpread$1({}, acc), {}, _defineProperty({}, k, _typeof(acc[k]) === 'object' && !Array.isArray(t) ? _objectSpread$1(_objectSpread$1({}, s[k]), acc[k]) : (_acc$k = acc[k]) !== null && _acc$k !== void 0 ? _acc$k : s[k]));
  }, t);
};

var colors = function colors() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : lightColorTheme;
  var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    colors: defaultsScale(c, base)
  };
};
var lightColorTheme = {
  primary: '#0171b6',
  text: '#1E3441',
  background: '#fff'
};
var darkColorTheme = {
  primary: '#DAA520',
  text: '#fff',
  background: '#211E15'
};
var colorMod = function colorMod(func) {
  return function (color, amount) {
    return "__$".concat(func, ";").concat(color, ";").concat(amount);
  };
};
var darken = colorMod('darken');
var lighten = colorMod('lighten');
var opacify = colorMod('opacify');
var transparentize = colorMod('transparentize');
var saturate = colorMod('saturate');
var desaturate = colorMod('desaturate');
var shade = colorMod('shade');
var tint = colorMod('tint');
var adjustHue = colorMod('adjustHue');
var colorTransform = function colorTransform(val, s) {
  var scale = s;

  if (typeof val === 'string' && val.startsWith('__')) {
    var reg = /__\$(.+);(\S+);(\S+)/.exec(val);

    if (reg) {
      var _reg = _slicedToArray(reg, 4),
          _ = _reg[0],
          func = _reg[1],
          color = _reg[2],
          amount = _reg[3];

      var a = Number(amount);
      var value = core.get(scale, color, lightColorTheme[color] || color);

      switch (func) {
        case 'darken':
          return polished.darken(a, value);

        case 'lighten':
          return polished.lighten(a, value);

        case 'opacify':
          return polished.opacify(a, value);

        case 'transparentize':
          return polished.transparentize(a, value);

        case 'saturate':
          return polished.saturate(a, value);

        case 'desaturate':
          return polished.desaturate(a, value);

        case 'shade':
          return polished.shade(a, value);

        case 'tint':
          return polished.tint(a, value);

        case 'adjustHue':
          return polished.adjustHue(a, value);
      }
    }

    return core.get(scale, val, lightColorTheme[val] || val);
  }

  return core.get(scale, val, lightColorTheme[val] || val);
};

var button = function button(b) {
  return {
    button: mergeThemes(b, emptyButton)
  };
};
var emptyButton = {
  default: {
    fontWeight: 500,
    fontFamily: 'text',
    fontSize: '1.4rem',
    lineHeight: '2.4rem',
    borderRadius: '0.3rem',
    display: 'inline-flex',
    bg: 'transparent',
    border: '0.1rem solid transparent',
    transition: 'background 300ms, color 300ms, border 300ms, box-shadow 300ms',
    cursor: 'pointer',
    textDecoration: 'none',
    alignItems: 'center',
    _disabled: {
      cursor: 'not-allowed'
    }
  },
  sizes: {
    xs: {
      py: 0,
      px: '0.8rem',
      fontSize: '1.2rem',
      lineHeight: '1.8rem'
    },
    sm: {
      px: '1.2rem',
      py: '0.3rem',
      fontSize: '1.3rem'
    },
    md: {
      px: '2rem',
      py: '0.7rem',
      fontSize: '1.4rem'
    },
    lg: {
      px: '3rem',
      py: '1.2rem',
      fontSize: '1.6rem'
    }
  },
  variants: {
    solid: {
      bg: 'primary',
      color: 'background',
      _hover: {
        bg: darken('primary', 0.025)
      },
      _active: {
        bg: darken('primary', 0.05)
      },
      _focus: {
        bg: darken('primary', 0.05),
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    },
    clear: {
      color: 'primary',
      _hover: {
        bg: opacify('primary', 0.1)
      },
      _active: {
        bg: opacify('primary', 0.2)
      },
      _focus: {
        bg: opacify('primary', 0.2),
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    },
    outline: {
      border: '1px solid',
      borderColor: 'primary',
      color: 'primary',
      _hover: {
        bg: opacify('primary', 0.1)
      },
      _active: {
        bg: opacify('primary', 0.2)
      },
      _focus: {
        bg: opacify('primary', 0.2),
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    },
    link: {
      padding: 0,
      color: 'primary',
      borderRadius: 0,
      border: 0,
      borderBottom: '1px solid transparent',
      _hover: {
        borderBottom: '1px solid',
        borderColor: 'primary'
      },
      _active: {
        color: '#036199'
      },
      _focus: {
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    }
  }
};

var card = function card(c) {
  return {
    card: mergeThemes(c, emptyCard)
  };
};
var emptyCard = {
  default: {
    color: 'text',
    background: 'background',
    maxWidth: '30rem',
    _header: {
      padding: '1rem'
    },
    _body: {
      padding: '1rem'
    },
    _footer: {
      padding: '1rem'
    }
  },
  variants: {
    normal: {},
    elevated: {
      borderRadius: '0.3rem',
      boxShadow: '0 0.3rem 0.8rem 0 rgba(36, 49, 70, 0.25)'
    },
    outline: {
      border: '1px solid rgba(69, 86, 99, 0.5)'
    }
  }
};

var container = function container(c) {
  return {
    container: mergeThemes(c, emptyContainer)
  };
};
var emptyContainer = {
  default: {
    ml: 'auto',
    mr: 'auto'
  },
  variants: {
    normal: {
      width: ['100%', '76.8rem', '102.4rem', '120rem', '132rem'],
      px: 3
    },
    fluid: {
      width: '100%',
      px: 3
    }
  }
};

var link = function link(l) {
  return {
    link: mergeThemes(l, emptyLink)
  };
};
var emptyLink = {
  default: {
    color: 'primary',
    borderBottom: '1px solid',
    borderColor: 'primary',
    fontSize: '1.6rem',
    lineHeight: 'initial',
    display: 'inline-flex',
    transition: 'color 300ms, border 300ms',
    cursor: 'pointer',
    _hover: {
      color: darken('primary', 0.025),
      borderBottom: '1px solid transparent'
    }
  },
  variants: {
    underline: {},
    simple: {
      borderBottom: '1px solid transparent',
      _hover: {
        color: darken('primary', 0.025),
        borderBottom: '1px solid transparent'
      }
    }
  }
};

var list = function list(l) {
  return {
    list: mergeThemes(l, emptyList)
  };
};
var emptyList = {
  default: {
    lineHeight: '2.4rem',
    margin: 0,
    padding: 0,
    _bullet: {
      content: '"\\2022"',
      color: '#152028',
      marginRight: '1.5rem'
    },
    _items: {
      color: 'text',
      paddingLeft: '.5rem',
      marginBottom: '1rem'
    }
  },
  variants: {
    ordered: {
      counterReset: 'list-counter',
      _items: {
        counterIncrement: 'list-counter'
      },
      _bullet: {
        position: 'relative',
        content: 'counter(list-counter)"." !important'
      }
    },
    unordered: {
      _bullet: {
        fontSize: '2.6rem'
      }
    }
  }
};

var tag = function tag(t) {
  return {
    tag: mergeThemes(t, emptyTag)
  };
};
var emptyTag = {
  default: {
    borderRadius: '0.3rem',
    border: '1px solid #455663',
    px: '0.8rem',
    fontFamily: 'text',
    fontSize: '1.2rem',
    fontWeight: 500,
    lineHeight: '2rem'
  },
  variants: {
    solid: {
      bg: '#455663',
      color: 'background'
    },
    outline: {
      color: '#0f1f28'
    },
    clear: {
      borderColor: 'transparent'
    }
  }
};

var text = function text(t) {
  return {
    text: mergeThemes(t, emptyText)
  };
};
var emptyText = {
  default: {
    fontFamily: 'text',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    transition: 'color 300ms',
    color: 'text'
  },
  variants: {
    span: {},
    em: {},
    strong: {},
    underline: {},
    abbr: {},
    strikethrough: {},
    sub: {},
    sup: {}
  }
};

var typography = function typography(t) {
  return {
    typography: mergeThemes(t, emptyTypography)
  };
};
var emptyTypography = {
  default: {
    fontFamily: 'heading',
    margin: 0,
    color: 'text'
  },
  variants: {
    p: {
      fontSize: '1.6rem',
      lineHeight: '2rem'
    },
    h1: {
      fontSize: '4.4rem',
      fontWeight: 500,
      lineHeight: '6.6rem'
    },
    h2: {
      fontSize: '3.2rem',
      fontWeight: 500,
      lineHeight: '4.8rem'
    },
    h3: {
      fontSize: '2.4rem',
      fontWeight: 500,
      lineHeight: '3.6rem'
    },
    h4: {},
    h5: {},
    h6: {},
    lead: {}
  }
};

var global = function global() {
  var g = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyGlobal;
  return {
    global: merge(g, emptyGlobal)
  };
};
var emptyGlobal = {
  _html: {
    fontSize: '10px',
    webkitFontSmoothing: 'antialiased',
    m: 0,
    p: 0
  },
  _body: {
    m: 0,
    p: 0,
    bg: 'background'
  },
  _all: {
    boxSizing: 'border-box'
  },
  _selection: {
    color: 'background',
    backgroundColor: 'primary'
  }
};

var breakpoints = function breakpoints() {
  var b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['30em', '48em', '64em', '78em', '85em'];
  var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['xs', 'sm', 'md', 'lg', 'xl'];
  return {
    breakpoints: scale(b, aliases)
  };
};

var fonts = function fonts() {
  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyFonts;
  return {
    fonts: defaultsScale(f, emptyFonts)
  };
};
var emptyFonts = {
  // eslint-disable-next-line max-len
  heading: '"rubik",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  text: '"rubik",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji'
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var createScales = function createScales() {
  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, colors()), breakpoints()), fonts()), scale);
};

var closeControl = function closeControl(c) {
  return {
    closeControl: mergeThemes(c, emptyCloseControl)
  };
};
var emptyCloseControl = {
  default: {
    cursor: 'pointer',
    _icon: {
      fill: '#455663',
      fillHover: '#1e1e1e'
    }
  },
  sizes: {
    xs: {
      width: '1.2rem',
      height: '1.2rem',
      _icon: {
        width: '0.6rem',
        height: '0.6rem'
      }
    },
    sm: {
      width: '1.6rem',
      height: '1.6rem',
      _icon: {
        width: '0.8rem',
        height: '0.8rem'
      }
    },
    md: {
      width: '2.4rem',
      height: '2.4rem',
      _icon: {
        width: '1.2rem',
        height: '1.2rem'
      }
    },
    lg: {
      width: '3.2rem',
      height: '3.2rem',
      _icon: {
        width: '1.6rem',
        height: '1.6rem'
      }
    }
  }
};

var modal = function modal(m) {
  return {
    modal: mergeThemes(m, emptyModal)
  };
};
var emptyModal = {
  default: {
    _overlay: {
      background: 'rgba(15, 31, 40, 0.5)'
    },
    _header: {
      fontSize: '2rem',
      lineHeight: '3rem',
      fontFamily: 'rubik'
    },
    _close: {
      position: 'absolute',
      top: '1rem',
      right: '1rem'
    },
    bg: '#fff',
    borderRadius: '0.3rem',
    padding: '3rem',
    overflow: 'scroll',
    maxHeight: '100%'
  },
  sizes: {
    sm: {
      maxWidth: '41rem'
    },
    md: {
      maxWidth: '63rem'
    },
    lg: {
      maxWidth: '85rem'
    },
    full: {
      maxWidth: 'none'
    }
  }
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var createTheme = function createTheme() {
  var _objectSpread2;

  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3((_objectSpread2 = {}, _defineProperty(_objectSpread2, '__xcoreTheme', true), _defineProperty(_objectSpread2, "name", 'Xcore'), _objectSpread2), global()), container()), text()), button()), typography()), link()), tag()), card()), list()), createScales()), closeControl()), modal()), theme);
};
var emptyTheme = createTheme();

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var base = function base(inherits, b) {
  var f = function f(p) {
    return b(p);
  };

  f.inherits = inherits;
  return f;
};
var polyfillTheme = function polyfillTheme(p) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyTheme;
  return p && (!('theme' in p) || p.theme === undefined || Object.keys(p.theme).length === 0 ? _objectSpread$4(_objectSpread$4({}, p), {}, {
    theme: theme
  }) : p);
};
var compose = function compose() {
  for (var _len = arguments.length, bases = new Array(_len), _key = 0; _key < _len; _key++) {
    bases[_key] = arguments[_key];
  }

  var flattenBases = Array.from(new Set(flatten(bases)));
  return function (p) {
    return flattenBases.map(function (b) {
      return b(polyfillTheme(p));
    });
  };
};

var flatten = function flatten(bases) {
  return bases.reduce(function (acc, b) {
    return b.inherits ? [].concat(_toConsumableArray(acc), _toConsumableArray(flatten(b.inherits))) : acc;
  }, bases);
};

var borderConfig = {
  // Border
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  // Border rop
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths'
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors'
  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  // Border bottom
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidths'
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors'
  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
    scale: 'borderStyles'
  },
  // Border right
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidths'
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors'
  },
  borderRightStyle: {
    property: 'borderRightStyle',
    scale: 'borderStyles'
  },
  // Border left
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths'
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors'
  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
    scale: 'borderStyles'
  },
  // Border compined
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};

var cursorConfig = {
  cursor: true,
  userSelect: true,
  pointerEvents: true
};

var flexConfig = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};

var gridItemConfig = {
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  column: {
    property: 'gridColumn'
  },
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  row: {
    property: 'gridRow'
  },
  gridArea: true,
  area: {
    property: 'gridArea'
  },
  justifySelf: true,
  alignSelf: true,
  placeSelf: true
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return core.get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var layoutConfig = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};

var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];
var positionConfig = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaultScale
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaultScale
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaultScale
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaultScale
  }
};

var shadowConfig = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
};

var defaultScale$1 = [0, 4, 8, 16, 32, 64, 128, 256, 512];

var isNumber$1 = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber$1(n)) {
    return core.get(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = core.get(scale, absolute, absolute);

  if (!isNumber$1(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var getMarginConfig = function getMarginConfig(property) {
  return {
    property: property,
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultScale$1
  };
};

var getPaddingConfig = function getPaddingConfig(property) {
  return {
    property: property,
    scale: 'space',
    defaultScale: defaultScale$1
  };
};

var spaceConfig = {
  margin: getMarginConfig('margin'),
  marginTop: getMarginConfig('marginTop'),
  marginRight: getMarginConfig('marginRight'),
  marginBottom: getMarginConfig('marginBottom'),
  marginLeft: getMarginConfig('marginLeft'),
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultScale$1
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultScale$1
  },
  // Padd
  padding: getPaddingConfig('padding'),
  paddingTop: getPaddingConfig('paddingTop'),
  paddingRight: getPaddingConfig('paddingRight'),
  paddingBottom: getPaddingConfig('paddingBottom'),
  paddingLeft: getPaddingConfig('paddingLeft'),
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaultScale$1
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaultScale$1
  }
};
spaceConfig.m = spaceConfig.margin;
spaceConfig.mt = spaceConfig.marginTop;
spaceConfig.mr = spaceConfig.marginRight;
spaceConfig.mb = spaceConfig.marginBottom;
spaceConfig.ml = spaceConfig.marginLeft;
spaceConfig.mx = spaceConfig.marginX;
spaceConfig.my = spaceConfig.marginY;
spaceConfig.p = spaceConfig.padding;
spaceConfig.pt = spaceConfig.paddingTop;
spaceConfig.pr = spaceConfig.paddingRight;
spaceConfig.pb = spaceConfig.paddingBottom;
spaceConfig.pl = spaceConfig.paddingLeft;
spaceConfig.px = spaceConfig.paddingX;
spaceConfig.py = spaceConfig.paddingY;

var defaultScale$2 = [12, 14, 16, 20, 24, 32, 48, 64, 72];
var typographyConfig = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaultScale$2
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};

var visualsConfig = {
  background: {
    property: 'background',
    scale: 'colors',
    transform: colorTransform
  },
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  color: {
    property: 'color',
    scale: 'colors',
    transform: colorTransform
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
    transform: colorTransform
  },
  opacity: true
};
visualsConfig.bgImage = visualsConfig.backgroundImage;
visualsConfig.bgSize = visualsConfig.backgroundSize;
visualsConfig.bgPosition = visualsConfig.backgroundPosition;
visualsConfig.bgRepeat = visualsConfig.backgroundRepeat;
visualsConfig.bg = visualsConfig.background;

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var selectionSystem = core.system({
  color: {
    property: 'color',
    scale: 'colors',
    transform: colorTransform
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
    transform: colorTransform
  },
  cursor: true,
  caretColor: {
    property: 'caretColor',
    scale: 'colors',
    transform: colorTransform
  },
  outline: true,
  outlineOffset: true,
  textDecoration: true,
  textEmphasisColor: {
    property: 'textEmphasisColor',
    scale: 'colors',
    transform: colorTransform
  },
  textShadow: true
});
var boxSystem = core.system(_objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5({}, layoutConfig), spaceConfig), typographyConfig), visualsConfig), borderConfig), flexConfig), gridItemConfig), positionConfig), cursorConfig), shadowConfig), {}, {
  animation: true,
  transition: true,
  transform: true,
  filter: true,
  outline: true,
  outlineOffset: true,
  WebkitTapHighlightColor: true
}));
var pseudoBoxSystem = core.system({
  content: true
});
var globalSystem = core.system({
  boxSizing: {
    property: 'boxSizing'
  }
});
var flexSystem = core.system({
  display: true
});
var textSystem = core.system({
  textTransform: true,
  WebkitLineClamp: true,
  WebkitBoxOrient: true,
  textOverflow: true,
  whiteSpace: true,
  textDecoration: true,
  wordBreak: true
});
var pathSystem = core.system({
  fill: {
    property: 'fill',
    scale: 'colors'
  }
});
var pathHoverSystem = core.system({
  fillHover: {
    property: 'fill',
    scale: 'colors'
  }
});

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  backface-visibility: hidden;\n\n  svg {\n    display: block;\n    max-width: 100%;\n    max-height: 100%;\n\n    path {\n      transition: fill 300ms;\n      ", "\n    }\n  }\n\n  &:not(:root) {\n    overflow: hidden;\n  }\n\n  &:hover {\n    svg path {\n      ", "\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        ", "\n      }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        ", "\n      }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      & *::selection {\n        ", "\n      }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      & path {\n        ", "\n        ", "\n      }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var selectionBase = function selectionBase(p) {
  return styled.css(_templateObject(), selectionSystem(p));
};
var boxBase = function boxBase(p) {
  return styled.css(_templateObject2(), boxSystem(p), p._icon && styled.css(_templateObject3(), pseudoBoxBaseComposed(_objectSpread$6(_objectSpread$6({}, p._icon), {}, {
    theme: p.theme
  })), pathSystem(_objectSpread$6(_objectSpread$6({}, p._icon), {}, {
    theme: p.theme
  }))), p._selection && styled.css(_templateObject4(), selectionBase(_objectSpread$6(_objectSpread$6({}, p._selection), {}, {
    theme: p.theme
  }))), Object.keys(pseudoSelectors).map(function (k) {
    return p[k] && styled.css(_templateObject5(), pseudoSelectors[k], pseudoBoxBaseComposed(_objectSpread$6(_objectSpread$6({}, p[k]), {}, {
      theme: p.theme
    })));
  }), p._group && Object.keys(groupPseudoSelectors).map(function (k) {
    return p._group[k] && styled.css(_templateObject6(), groupPseudoSelectors[k], pseudoBoxBaseComposed(_objectSpread$6(_objectSpread$6({}, p._group[k]), {}, {
      theme: p.theme
    })));
  }));
};
var composedBoxBase = compose(boxBase);
var pseudoBoxBase = base([boxBase], function (p) {
  return styled.css(_templateObject7(), pseudoBoxSystem(p));
});
var pseudoBoxBaseComposed = compose(pseudoBoxBase);
var globalBase = base([boxBase], function (_ref) {
  var webkitFontSmoothing = _ref.webkitFontSmoothing,
      p = _objectWithoutProperties(_ref, ["webkitFontSmoothing"]);

  return styled.css(_templateObject8(), globalSystem(p));
});
var flexBase = base([boxBase], function (p) {
  var _p$display;

  return styled.css(_templateObject9(), flexSystem({
    display: (_p$display = p.display) !== null && _p$display !== void 0 ? _p$display : 'flex'
  }));
});
var composedFlexBase = compose(flexBase);
var iconBase = base([flexBase], function (p) {
  return styled.css(_templateObject10(), pathSystem(p), pathHoverSystem(p));
});
var composedIconBase = compose(iconBase);
var textBase = base([boxBase], function (p) {
  return styled.css(_templateObject11(), textSystem(p));
});
var composedTextBase = compose(textBase);
var pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus',
  _before: '&::before',
  _after: '&::after',
  // eslint-disable-next-line max-len
  _disabled: '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  _groupHover: '[role=group]:hover &',
  _placeholder: '&::placeholder',
  _focusWithin: '&:focus-within',
  _first: '&:first-child',
  _firstOfType: '&:first-of-type',
  _last: '&:last-child'
};
var groupPseudoSelectors = {
  _hover: '[role=group]:hover &',
  _active: '[role=group]:active &',
  _focus: '[role=group]:focus &'
};

var defaultScale$3 = [0, 4, 8, 16, 32, 64, 128, 256, 512];
var gridConfig = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaultScale$3
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaultScale$3
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaultScale$3
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
  justifyItems: true,
  justifyContent: true,
  alignContent: true,
  alignItems: true,
  columns: {
    property: 'gridTemplateColumns'
  },
  rows: {
    property: 'gridTemplateRows'
  },
  gap: {
    property: 'gridGap'
  }
};

var shouldForwardProp = function shouldForwardProp(prop, isValidAttr) {
  return isValidAttr(prop) && (typeof prop !== 'string' || !(prop[0] === '_' || blacklist.includes(prop)));
};
var blacklist = [].concat(_toConsumableArray(Object.keys(selectionSystem)), _toConsumableArray(Object.keys(borderConfig)), _toConsumableArray(Object.keys(cursorConfig)), _toConsumableArray(Object.keys(flexConfig)), _toConsumableArray(Object.keys(gridConfig)), _toConsumableArray(Object.keys(gridItemConfig)), _toConsumableArray(Object.keys(layoutConfig)), _toConsumableArray(Object.keys(positionConfig)), _toConsumableArray(Object.keys(shadowConfig)), _toConsumableArray(Object.keys(spaceConfig)), _toConsumableArray(Object.keys(typographyConfig)), _toConsumableArray(Object.keys(visualsConfig)));

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Box = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$1(), compose(boxBase));

var useTheme = function useTheme() {
  var theme = React.useContext(styled.ThemeContext);
  return theme !== null && theme !== void 0 ? theme : emptyTheme;
};

var useMerge = function useMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return React.useMemo(function () {
    return merge.apply(void 0, [target].concat(sources));
  }, [target].concat(sources));
};

var variant = function variant(variants, def) {
  var _aliases$reduce;

  for (var _len = arguments.length, aliases = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    aliases[_key - 2] = arguments[_key];
  }

  return (_aliases$reduce = aliases.reduce(function (acc, val) {
    return acc !== null && acc !== void 0 ? acc : variants[val];
  }, undefined)) !== null && _aliases$reduce !== void 0 ? _aliases$reduce : variants[def];
};
var typeVariant = function typeVariant(theme, def, props) {
  return variant(theme.variants, def, props.v, props.variant);
};
var sizeVariant = function sizeVariant(theme, def, props) {
  return variant(theme.sizes, def, props.s, props.size);
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Text = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref2, _p$variant;

  var _as = _ref.as,
      p = _objectWithoutProperties(_ref, ["as"]);

  var _useTheme = useTheme(),
      text = _useTheme.text;

  var as = _as !== null && _as !== void 0 ? _as : {
    span: 'span',
    em: 'em',
    strong: 'strong',
    underline: 'u',
    abbr: 'abbr',
    strikethrough: 's',
    sub: 'sub',
    sup: 'sup'
  }[(_ref2 = (_p$variant = p.variant) !== null && _p$variant !== void 0 ? _p$variant : p.v) !== null && _ref2 !== void 0 ? _ref2 : 'span'];
  var props = useMerge(p, typeVariant(text, 'span', p), text.default);
  return /*#__PURE__*/React__default.createElement(TextStyle, Object.assign({}, props, {
    as: as,
    ref: ref
  }));
});
var TextStyle = styled__default.span.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$2(), composedTextBase);

var ActiveBreakpoint = function ActiveBreakpoint(props) {
  var _useTheme = useTheme(),
      breakpoints = _useTheme.breakpoints;

  var style = breakpoints.aliases.map(function () {
    return 'none';
  });
  return /*#__PURE__*/React__default.createElement(Box, Object.assign({}, props), /*#__PURE__*/React__default.createElement(Text, null, /*#__PURE__*/React__default.createElement(Box, {
    display: ['block'].concat(_toConsumableArray(style.slice(1, style.length - 1)))
  }, "[0]: \"_\" (0 - ", breakpoints[0], ")"), breakpoints.aliases.map(function (a, i) {
    return /*#__PURE__*/React__default.createElement(Box, {
      key: a,
      display: [].concat(_toConsumableArray(style.slice(0, i + 1)), ['block'], _toConsumableArray(style.slice(i + 2)))
    }, "[", i + 1, "]: \"", a, "\" (", breakpoints[i], " - ", i === breakpoints.length - 1 ? '∞' : breakpoints[i + 1], ")");
  })));
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Flex = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$3(), composedFlexBase);
Flex.displayName = 'Flex';

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  & > div {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  img {\n    object-fit: cover;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var AspectRatioStyle = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$4(), composedBoxBase);

var AspectRatio = function AspectRatio(_ref) {
  var ratio = _ref.ratio,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["ratio", "children"]);

  return /*#__PURE__*/React__default.createElement(AspectRatioStyle, Object.assign({
    width: "100%",
    height: 0,
    pb: ratio * 100 + '%',
    position: "relative"
  }, props), /*#__PURE__*/React__default.createElement(Flex, {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0
  }, children));
};

var Collapse = function Collapse(_ref) {
  var open = _ref.open,
      _ref$start = _ref.start,
      start = _ref$start === void 0 ? 0 : _ref$start,
      _ref$end = _ref.end,
      end = _ref$end === void 0 ? 'auto' : _ref$end,
      props = _objectWithoutProperties(_ref, ["open", "start", "end"]);

  return /*#__PURE__*/React__default.createElement(AnimateHeight, {
    height: open ? end : start
  }, /*#__PURE__*/React__default.createElement(Box, Object.assign({}, props)));
};

var renderComponent = function renderComponent(c) {
  return typeof c === 'function' ? /*#__PURE__*/React.createElement(c) : c;
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var Icon = function Icon(_ref) {
  var svg = _ref.svg,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["svg", "children"]);

  return /*#__PURE__*/React__default.createElement(IconStyle, Object.assign({
    display: "inline-block",
    verticalAlign: "middle",
    maxHeight: "100%"
  }, props), renderComponent(svg), children);
};
var IconStyle = styled__default.span.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$5(), composedIconBase);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}

var Img = function Img(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React__default.createElement(ImgStyle, Object.assign({
    as: 'img'
  }, props));
};
var imgSystem = core.system({
  objectFit: true
});
var ImgStyle = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$6(), composedBoxBase, imgSystem);

var pseudoRandomGenerator = function pseudoRandomGenerator() {
  var acc = 0.5;
  return function () {
    acc = acc * 1.6564534 % 1;
    return acc;
  };
};

var LoremIpsum = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var count = _ref.count,
      units = _ref.units,
      random = _ref.random,
      props = _objectWithoutProperties(_ref, ["count", "units", "random"]);

  var pseudoRandom = React.useMemo(function () {
    return pseudoRandomGenerator();
  }, []);
  var text = React.useMemo(function () {
    return loremIpsum.loremIpsum({
      count: count,
      units: units !== null && units !== void 0 ? units : 'paragraphs',
      random: random ? Math.random : pseudoRandom
    });
  }, [count, units]);
  return /*#__PURE__*/React__default.createElement(Text, Object.assign({}, props, {
    ref: ref
  }), text);
});

var repeatRegex = /(repeat\()([0-9]+)( *, *)(.+)(\))/; // Basicaly split by " " but dont split functions like repeat

var parseTemplate = function parseTemplate(template, gap) {
  return parse(template.split('').reduce(function (_ref, val) {
    var _ref2 = _slicedToArray(_ref, 3),
        result = _ref2[0],
        current = _ref2[1],
        indent = _ref2[2];

    return val === ' ' && indent === 0 ? parse([result, current, indent], gap) : val === '(' ? [result, current + val, indent + 1] : val === ')' ? [result, current + val, indent - 1] : [result, current + val, indent];
  }, [[], '', 0]), gap, true)[0];
};

var parse = function parse(_ref3, gap, last) {
  var _ref4 = _slicedToArray(_ref3, 2),
      result = _ref4[0],
      current = _ref4[1];

  return [[].concat(_toConsumableArray(result), _toConsumableArray(repeatRegex.test(current) ? repeat(current, gap) : [current]), _toConsumableArray(!last && gap ? [gap] : [])), '', 0];
};

var repeat = function repeat(r, gap) {
  var _repeatRegex$exec = repeatRegex.exec(r),
      _repeatRegex$exec2 = _slicedToArray(_repeatRegex$exec, 5),
      _ = _repeatRegex$exec2[0],
      __ = _repeatRegex$exec2[1],
      count = _repeatRegex$exec2[2],
      ___ = _repeatRegex$exec2[3],
      val = _repeatRegex$exec2[4];

  var n = parseInt(count);
  return getTemplate(n, val, gap);
};

var getTemplate = function getTemplate(n, val, gap) {
  var length = gap ? n * 2 - 1 : n;
  return _toConsumableArray(Array(length >= 0 ? length : 0)).map(function (v, i) {
    return i % 2 === 1 ? gap !== null && gap !== void 0 ? gap : val : val;
  });
};
var parseTwin = function parseTwin(val) {
  if (!val) {
    return [null, null];
  }

  var _val$split = val.split(' '),
      _val$split2 = _slicedToArray(_val$split, 2),
      a = _val$split2[0],
      b = _val$split2[1];

  return [a, b || a];
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n            @media screen and (min-width: ", ") {\n              ", "\n            }\n          "]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var mediaQueries = function mediaQueries(breakpoints, predicate) {
  return breakpoints.map(function (br, i) {
    var val = filterVal(predicate(i, br));
    return isValueEmpty(val) ? '' : i === 0 ? val : styled.css(_templateObject$7(), breakpoints[i - 1], val);
  });
};

var isValueEmpty = function isValueEmpty(val) {
  return (// eslint-disable-next-line @typescript-eslint/no-extra-parens
    val === false || val === undefined || Array.isArray(val) && val.length === 0
  );
};

var filterVal = function filterVal(val) {
  return Array.isArray(val) ? val.filter(Boolean) : val;
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var transform = function transform(breakpoints) {
  return function (val) {
    return _typeof(val) === 'object' && val !== null ? Array.isArray(val) ? transformArray(breakpoints, val) : transformObject(breakpoints, val) : transformValue(breakpoints, val);
  };
};

var transformArray = function transformArray(breakpoints, val) {
  return {
    map: function map(unit) {
      return val.map(function (x, i) {
        var _unit;

        return x !== null && x !== undefined ? (_unit = unit(x, i)) !== null && _unit !== void 0 ? _unit : null : null;
      });
    },
    mapAll: function mapAll(unit) {
      return val.map(unit);
    },
    reduce: null,
    get: function get(index) {
      var _val$numIndex;

      var numIndex = typeof index === 'number' ? index : index === '_' ? 0 : breakpoints.aliases.indexOf(index) + 1;
      return (_val$numIndex = val[numIndex]) !== null && _val$numIndex !== void 0 ? _val$numIndex : val.reduceRight(function (acc, v, i) {
        return acc === null && i < numIndex ? v : acc;
      }, null);
    },
    empty: function empty(i) {
      var numIndex = typeof i === 'number' ? i : i === '_' ? 0 : breakpoints.aliases.indexOf(i) + 1;
      return val[numIndex] === null || val[numIndex] === undefined;
    },
    value: val,
    type: 'array'
  };
};

var transformObject = function transformObject(breakpoints, val) {
  return {
    map: function map(unit) {
      return Object.keys(val).reduce(function (acc, k) {
        var v = val[k] === undefined ? val[k] : unit(val[k], k);
        return v !== null && v !== undefined ? _objectSpread$7(_objectSpread$7({}, acc), {}, _defineProperty({}, k, v)) : acc;
      }, {});
    },
    mapAll: null,
    reduce: null,
    get: function get(index) {
      var _breakpoints$aliases, _ref, _val$key;

      var key = typeof index === 'string' ? index : (_breakpoints$aliases = breakpoints.aliases[index - 1]) !== null && _breakpoints$aliases !== void 0 ? _breakpoints$aliases : '_';
      return (_ref = (_val$key = val[key]) !== null && _val$key !== void 0 ? _val$key : // Look for value in previous values
      ['_'].concat(_toConsumableArray(breakpoints.aliases)).reduceRight(function (acc, k) {
        return k === key ? null : acc === null && val[k] ? val[k] : acc;
      }, undefined)) !== null && _ref !== void 0 ? _ref : // Return null instead of undefined
      null;
    },
    empty: function empty(i) {
      var _breakpoints$aliases2;

      var key = typeof i === 'string' ? i : (_breakpoints$aliases2 = breakpoints.aliases[i - 1]) !== null && _breakpoints$aliases2 !== void 0 ? _breakpoints$aliases2 : '_';
      return val[key] === null || val[key] === undefined;
    },
    value: val,
    type: 'object'
  };
};

var transformValue = function transformValue(breakpoints, val) {
  return {
    map: function map(unit) {
      var _unit2;

      return val !== null && val !== undefined ? (_unit2 = unit(val, 0)) !== null && _unit2 !== void 0 ? _unit2 : null : null;
    },
    mapAll: function mapAll(unit) {
      return unit(val, 0);
    },
    reduce: function reduce(unit, initialValue) {
      return val ? unit(initialValue, val, 0) : initialValue;
    },
    get: function get(_) {
      return val !== null && val !== void 0 ? val : null;
    },
    empty: function empty(i) {
      return i !== 0 || val === null || val === undefined;
    },
    value: val,
    type: 'value'
  };
};

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n        & > *:nth-child(", ") {\n          -ms-grid-column: ", ";\n          -ms-grid-row: ", ";\n        }\n      "]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n          -ms-grid-rows: ", ";\n        "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n          -ms-grid-columns: ", ";\n        "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n        ", "\n\n        ", "\n\n        ", "\n      "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  display: grid;\n  display: -ms-grid;\n\n  ", "\n\n  ", "\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var GridContext = /*#__PURE__*/React.createContext({
  gap: []
});
var Grid = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var columns = _ref.columns,
      rows = _ref.rows,
      gap = _ref.gap,
      props = _objectWithoutProperties(_ref, ["columns", "rows", "gap"]);

  var _useTheme = useTheme(),
      breakpoints = _useTheme.breakpoints;

  var t = transform(breakpoints);
  return /*#__PURE__*/React__default.createElement(GridContext.Provider, {
    value: {
      gap: gap
    }
  }, /*#__PURE__*/React__default.createElement(GridStyle, Object.assign({
    columns: t(columns),
    rows: t(rows),
    gap: t(gap),
    breakpoints: breakpoints,
    ref: ref
  }, props)));
});
Grid.displayName = 'Grid';
var GridStyle = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$8(), composedBoxBase, function (p) {
  return gridSystem(polyfillTheme(_objectSpread$8(_objectSpread$8({}, p), {}, {
    rows: p.rows.value,
    columns: p.columns.value,
    gap: p.gap.value
  })));
}, function (_ref2) {
  var columns = _ref2.columns,
      rows = _ref2.rows,
      gap = _ref2.gap,
      breakpoints = _ref2.breakpoints;
  return  mediaQueries(breakpoints, function (i) {
    var colVal = columns.get(i);
    var rowVal = rows.get(i);
    var gapVal = parseTwin(gap.get(i));
    return !(columns.empty(i) && rows.empty(i) && gap.empty(i)) && styled.css(_templateObject2$1(), !(columns.empty(i) && gap.empty(i)) && styled.css(_templateObject3$1(), parseTemplate(colVal, gapVal ? gapVal[0] : null).join(' ')), !(rows.empty(i) && gap.empty(i)) && styled.css(_templateObject4$1(), parseTemplate(rowVal, gapVal ? gapVal[1] : null).join(' ')), templateQueries(parseTemplate(colVal), parseTemplate(rowVal), !!gapVal));
  });
});
var gridSystem = core.system(gridConfig);

var templateQueries = function templateQueries(columns, rows, gap) {
  return styled.css(_templateObject5$1(), rows.map(function (_, y) {
    return styled.css(_templateObject6$1(), columns.map(function (c, x) {
      return styled.css(_templateObject7$1(), y * columns.length + x + 1, gap ? 2 * x + 1 : x + 1, gap ? 2 * y + 1 : y + 1);
    }));
  }));
};

var SimpleGrid = function SimpleGrid(_ref) {
  var columns = _ref.columns,
      _unit = _ref.unit,
      children = _ref.children,
      _gap = _ref.gap,
      props = _objectWithoutProperties(_ref, ["columns", "unit", "children", "gap"]);

  var _useTheme = useTheme(),
      breakpoints = _useTheme.breakpoints;

  var t = transform(breakpoints);
  var cols = t(columns);
  var gapRow = t(t(_gap).map(function (g) {
    return g && parseTwin(g)[1];
  }));
  var unit = t(_unit);
  return /*#__PURE__*/React__default.createElement(Grid, Object.assign({
    columns: cols.map(function (c, i) {
      var _unit$get;

      return "repeat(".concat(c, ", ").concat((_unit$get = unit.get(i)) !== null && _unit$get !== void 0 ? _unit$get : '1fr', ")");
    }),
    rows: breakpoints.map(function (_, i) {
      var _unit$get2;

      return !gapRow.empty(i) || !cols.empty(i) || !unit.empty(i) ? "repeat(".concat(Math.ceil(React.Children.count(children) / cols.get(i)), ", ").concat((_unit$get2 = unit.get(i)) !== null && _unit$get2 !== void 0 ? _unit$get2 : '1fr', ")") : null;
    }),
    gap: _gap
  }, props), children);
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  animation: ", " ", " linear infinite;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

var Spinner = function Spinner(props) {
  return /*#__PURE__*/React__default.createElement(SpinnerStyle, Object.assign({
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "full",
    borderWidth: "2px",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    width: "1.6rem",
    height: "1.6rem",
    speed: "0.5s"
  }, props));
};
var spin = styled.keyframes(_templateObject$9());
var SpinnerStyle = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject2$2(), composedBoxBase, spin, function (_ref) {
  var speed = _ref.speed;
  return speed;
});

var Stack = function Stack(_ref) {
  var _direction = _ref.direction,
      align = _ref.align,
      justify = _ref.justify,
      wrap = _ref.wrap,
      _gap = _ref.gap,
      children = _ref.children,
      wrapItems = _ref.wrapItems,
      props = _objectWithoutProperties(_ref, ["direction", "align", "justify", "wrap", "gap", "children", "wrapItems"]);

  var _useTheme = useTheme(),
      breakpoints = _useTheme.breakpoints;

  var t = transform(breakpoints);
  var direction = t(_direction !== null && _direction !== void 0 ? _direction : 'row');
  var gap = t(_gap);
  var itemStyle = ['_'].concat(_toConsumableArray(breakpoints.aliases)).reduce(function (acc, val) {
    var d = direction.get(val);
    var g = gap.get(val);
    return {
      mb: [].concat(_toConsumableArray(acc.mb), [d === 'column' ? g : 0]),
      mr: [].concat(_toConsumableArray(acc.mr), [d === 'row' ? g : 0])
    };
  }, {
    mb: [],
    mr: []
  });
  var maxWidth = direction.map(function (d) {
    return d === 'column' ? '100%' : null;
  });

  var getStyle = function getStyle(i) {
    var last = React.Children.count(children) === i + 1;
    return {
      mb: last ? 0 : itemStyle.mb,
      mr: last ? 0 : itemStyle.mr,
      maxWidth: maxWidth
    };
  };

  return /*#__PURE__*/React__default.createElement(Flex, Object.assign({
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction.value,
    flexWrap: wrap
  }, props), React.Children.map(children, function (child, i) {
    return wrapItems ? /*#__PURE__*/React__default.createElement(Box, Object.assign({}, getStyle(i)), child) : /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, getStyle(i)) : child;
  }));
};

var parseGridCell = function parseGridCell(val) {
  return typeof val === 'number' ? [val.toString(), undefined] : val.split('/');
};
var parseGridAxis = function parseGridAxis(axis, gap) {
  if (axis === null) {
    return [undefined, undefined];
  }

  var _parseGridCell = parseGridCell(axis),
      _parseGridCell2 = _slicedToArray(_parseGridCell, 2),
      start = _parseGridCell2[0],
      end = _parseGridCell2[1];

  var getIndex = function getIndex(n) {
    return gap ? 2 * n - 1 : n;
  };

  return [getIndex(Number(start)), parseSpan(end, Number(start), getIndex)];
};
var parseSpan = function parseSpan(end, start, getIndex) {
  return !end ? undefined : end.includes('span') ? getIndex(Number(end.replace('span', ''))) : getIndex(Number(end)) - getIndex(start);
};

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n            -ms-grid-row-align: ", ";\n            -ms-grid-column-align: ", ";\n          "]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n            -ms-grid-row-span: ", " !important;\n          "]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n            -ms-grid-row: ", " !important;\n          "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n            -ms-grid-column-span: ", " !important;\n          "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n            -ms-grid-column: ", " !important;\n          "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}

var Cell = function Cell(_ref) {
  var column = _ref.column,
      gridColumn = _ref.gridColumn,
      row = _ref.row,
      gridRow = _ref.gridRow,
      props = _objectWithoutProperties(_ref, ["column", "gridColumn", "row", "gridRow"]);

  var _useTheme = useTheme(),
      breakpoints = _useTheme.breakpoints;

  var _useContext = React.useContext(GridContext),
      gap = _useContext.gap;

  return /*#__PURE__*/React__default.createElement(CellStyle, Object.assign({
    column: column !== null && column !== void 0 ? column : gridColumn,
    row: row !== null && row !== void 0 ? row : gridRow,
    gap: gap,
    breakpoints: breakpoints
  }, props));
};
var CellStyle = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$a(), composedBoxBase, function (p) {
  return  [// Styled system properties
  cellSystem(polyfillTheme(p)), // Manually position element in grid and handle place-self property
  mediaQueries(p.breakpoints, function (i) {
    var t = transform(p.breakpoints);
    var column = t(p.column);
    var row = t(p.row);
    var gap = t(p.gap);

    var _parseTwin = parseTwin(gap.get(i)),
        _parseTwin2 = _slicedToArray(_parseTwin, 2),
        gc = _parseTwin2[0],
        gr = _parseTwin2[1];

    var _parseGridAxis = parseGridAxis(column.get(i), !!gc),
        _parseGridAxis2 = _slicedToArray(_parseGridAxis, 2),
        colStart = _parseGridAxis2[0],
        colEnd = _parseGridAxis2[1];

    var _parseGridAxis3 = parseGridAxis(row.get(i), !!gr),
        _parseGridAxis4 = _slicedToArray(_parseGridAxis3, 2),
        rowStart = _parseGridAxis4[0],
        rowEnd = _parseGridAxis4[1];

    var placeSelf = transform(p.breakpoints)(p.placeSelf).get(i);
    var s = placeSelf === null || placeSelf === void 0 ? void 0 : placeSelf.split(' ');
    return [// Grid position
    (!column.empty(i) || !gap.empty(i)) && colStart && styled.css(_templateObject2$3(), colStart), (!column.empty(i) || !gap.empty(i)) && colEnd && styled.css(_templateObject3$2(), colEnd), (!row.empty(i) || !gap.empty(i)) && rowStart && styled.css(_templateObject4$2(), rowStart), (!row.empty(i) || !gap.empty(i)) && rowEnd && styled.css(_templateObject5$2(), rowEnd), // place-self
    s && styled.css(_templateObject6$2(), s[0], s[1] ? s[1] : s[0])];
  })];
});
var cellSystem = core.system({
  alignSelf: {
    properties: ['-ms-flex-item-align', '-ms-grid-row-align']
  },
  justifySelf: {
    property: '-ms-grid-column-align'
  }
});

var InsetBox = function InsetBox(_ref) {
  var target = _ref.target,
      p = _objectWithoutProperties(_ref, ["target"]);

  var _useState = React.useState({
    x: null,
    y: null,
    width: null,
    height: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      rect = _useState2[0],
      setRect = _useState2[1];

  React.useLayoutEffect(function () {
    if (target === null || target === void 0 ? void 0 : target.current) {
      var _target$current$getBo = target.current.getBoundingClientRect(),
          x = _target$current$getBo.x,
          y = _target$current$getBo.y,
          width = _target$current$getBo.width,
          height = _target$current$getBo.height;

      if (x !== rect.x || y !== rect.y || width !== rect.width || height !== rect.height) {
        setRect({
          x: x,
          y: y,
          width: width,
          height: height
        });
      }
    }
  });
  return /*#__PURE__*/React__default.createElement(Portal, null, target ? /*#__PURE__*/React__default.createElement(Box, {
    position: "absolute",
    left: rect.x,
    top: rect.y,
    width: rect.width,
    height: rect.height
  }, /*#__PURE__*/React__default.createElement(Box, {
    position: "relative",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React__default.createElement(InnerInsetBox, Object.assign({}, p)))) : /*#__PURE__*/React__default.createElement(InnerInsetBox, Object.assign({}, p)));
};

var InnerInsetBox = function InnerInsetBox(_ref2) {
  var h = _ref2.h,
      horizontalPosition = _ref2.horizontalPosition,
      v = _ref2.v,
      verticalPosition = _ref2.verticalPosition,
      props = _objectWithoutProperties(_ref2, ["h", "horizontalPosition", "v", "verticalPosition"]);

  var _useTheme = useTheme(),
      breakpoints = _useTheme.breakpoints;

  var t = transform(breakpoints);
  var hor = t(h !== null && h !== void 0 ? h : horizontalPosition);
  var ver = t(v !== null && v !== void 0 ? v : verticalPosition);
  return /*#__PURE__*/React__default.createElement(Box, Object.assign({
    position: "absolute",
    top: ver.map(function (y) {
      return y === 'top' || y === 'stretch' ? 0 : y === 'center' ? '50%' : null;
    }),
    bottom: ver.map(function (y) {
      return y === 'bottom' || y === 'stretch' ? 0 : null;
    }),
    left: hor.map(function (x) {
      return x === 'left' || x === 'stretch' ? 0 : x === 'center' ? '50%' : null;
    }),
    right: hor.map(function (x) {
      return x === 'right' || x === 'stretch' ? 0 : null;
    }),
    transform: ver.map(function (y, i) {
      return "".concat(y === 'center' ? 'translateY(-50%)' : '', " ").concat(hor.get(i) === 'center' ? 'translateX(-50%)' : '');
    })
  }, props));
};

var OutsetBox = function OutsetBox(_ref) {
  var h = _ref.h,
      horizontalPosition = _ref.horizontalPosition,
      v = _ref.v,
      verticalPosition = _ref.verticalPosition,
      target = _ref.target,
      props = _objectWithoutProperties(_ref, ["h", "horizontalPosition", "v", "verticalPosition", "target"]);

  var _useTheme = useTheme(),
      breakpoints = _useTheme.breakpoints;

  var tr = transform(breakpoints);
  var hor = tr(h !== null && h !== void 0 ? h : horizontalPosition);
  var ver = tr(v !== null && v !== void 0 ? v : verticalPosition);

  var _useState = React.useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      top = _useState2$.top,
      left = _useState2$.left,
      right = _useState2$.right,
      bottom = _useState2$.bottom,
      setRect = _useState2[1];

  var t = target instanceof Element ? target : target.current;

  var up = function up() {
    var rect = t.getBoundingClientRect();

    if (top !== rect.top || left !== rect.left || right !== rect.right || bottom !== rect.bottom) {
      setRect({
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom
      });
    }
  };

  var _useDebouncedCallback = useDebounce.useDebouncedCallback(up, 500),
      _useDebouncedCallback2 = _slicedToArray(_useDebouncedCallback, 1),
      update = _useDebouncedCallback2[0];

  React.useLayoutEffect(function () {
    t && up();
  });
  React.useEffect(function () {
    var handler = function handler() {
      return update();
    };

    window.addEventListener('resize', handler);
    return function () {
      window.removeEventListener('resize', handler);
    };
  }, []);
  return /*#__PURE__*/React__default.createElement(Portal, null, /*#__PURE__*/React__default.createElement(Box, {
    position: "absolute",
    left: hor.map(function (y) {
      return y === 'right' ? right : y === 'center' ? left : null;
    }),
    right: hor.map(function (y) {
      return y === 'left' ? "calc(100vw - ".concat(left, "px)") : y === 'center' ? "calc(100vw - ".concat(right, "px)") : null;
    }),
    bottom: ver.map(function (x) {
      return x === 'top' ? "calc(100vh - ".concat(top, "px)") : x === 'center' ? "calc(100vh - ".concat(bottom, "px)") : null;
    }),
    top: ver.map(function (x) {
      return x === 'bottom' ? bottom : x === 'center' ? top : null;
    })
  }, /*#__PURE__*/React__default.createElement(Box, Object.assign({}, props))));
};

var sideComp = function sideComp(_ref) {
  var _icon = _ref._icon,
      icon = _ref.icon,
      element = _ref.element,
      props = _objectWithoutProperties(_ref, ["_icon", "icon", "element"]);

  return [{
    _icon: _icon,
    icon: icon,
    element: element
  }, props];
};
var comp = function comp(_ref2) {
  var _rightIcon = _ref2._rightIcon,
      rightIcon = _ref2.rightIcon,
      rightElement = _ref2.rightElement,
      _leftIcon = _ref2._leftIcon,
      leftIcon = _ref2.leftIcon,
      leftElement = _ref2.leftElement,
      props = _objectWithoutProperties(_ref2, ["_rightIcon", "rightIcon", "rightElement", "_leftIcon", "leftIcon", "leftElement"]);

  return [{
    _icon: _leftIcon,
    icon: leftIcon,
    element: leftElement
  }, {
    _icon: _rightIcon,
    icon: rightIcon,
    element: rightElement
  }, props];
};

var Complement = function Complement(_ref3) {
  var _icon = _ref3._icon,
      icon = _ref3.icon,
      element = _ref3.element;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, renderComponent(element), icon && /*#__PURE__*/React__default.createElement(Icon, Object.assign({
    mr: "1rem",
    svg: icon
  }, _icon)));
};

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var loading = _ref.loading,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'button' : _ref$as,
      children = _ref.children,
      p = _objectWithoutProperties(_ref, ["loading", "as", "children"]);

  var _useTheme = useTheme(),
      button = _useTheme.button;

  var m = useMerge(p, typeVariant(button, 'solid', p), sizeVariant(button, 'md', p), button.default);

  var _comp = comp(m),
      _comp2 = _slicedToArray(_comp, 3),
      left = _comp2[0],
      right = _comp2[1],
      _comp2$ = _comp2[2],
      _spinner = _comp2$._spinner,
      props = _objectWithoutProperties(_comp2$, ["_spinner"]);

  return /*#__PURE__*/React__default.createElement(ButtonStyle, Object.assign({
    role: "group",
    as: as
  }, props, {
    ref: ref
  }), /*#__PURE__*/React__default.createElement(Complement, Object.assign({}, left)), loading && /*#__PURE__*/React__default.createElement(Spinner, Object.assign({
    mr: children ? '1rem' : 0
  }, _spinner)), children, /*#__PURE__*/React__default.createElement(Complement, Object.assign({}, right)));
});
var ButtonStyle = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$b(), compose(textBase, flexBase));

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var Tag = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      p = _objectWithoutProperties(_ref, ["children"]);

  var _useTheme = useTheme(),
      tag = _useTheme.tag;

  var m = useMerge(p, typeVariant(tag, 'solid', p), tag.default);

  var _comp = comp(m),
      _comp2 = _slicedToArray(_comp, 3),
      left = _comp2[0],
      right = _comp2[1],
      props = _comp2[2];

  return /*#__PURE__*/React__default.createElement(TagStyle, Object.assign({
    whiteSpace: "nowrap",
    alignItems: 'center',
    userSelect: 'none',
    transition: 'color 300ms, background 300ms, border-color 300ms'
  }, props, {
    ref: ref
  }), /*#__PURE__*/React__default.createElement(Complement, Object.assign({}, left)), children, /*#__PURE__*/React__default.createElement(Complement, Object.assign({}, right)));
});
var TagStyle = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$c(), compose(flexBase, textBase));

var Card = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _header$p, _ref6, _footer$p;

  var children = _ref.children,
      p = _objectWithoutProperties(_ref, ["children"]);

  var _useTheme = useTheme(),
      card = _useTheme.card;

  var type = typeVariant(card, 'elevated', p);

  var _useMerge = useMerge(p, type, card.default),
      _header = _useMerge._header,
      header = _useMerge.header,
      _tag = _useMerge._tag,
      tag = _useMerge.tag,
      _title = _useMerge._title,
      title = _useMerge.title,
      _media = _useMerge._media,
      media = _useMerge.media,
      _body = _useMerge._body,
      body = _useMerge.body,
      _footer = _useMerge._footer,
      footer = _useMerge.footer,
      innerPadding = _useMerge.innerPadding,
      props = _objectWithoutProperties(_useMerge, ["_header", "header", "_tag", "tag", "_title", "title", "_media", "media", "_body", "body", "_footer", "footer", "innerPadding"]);

  var getPadding = function getPadding(target) {
    var _ref2, _ref3, _ref4, _ref5, _target$padding, _target, _target2, _target3;

    return (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_target$padding = (_target = target(p)) === null || _target === void 0 ? void 0 : _target.padding) !== null && _target$padding !== void 0 ? _target$padding : p.innerPadding) !== null && _ref5 !== void 0 ? _ref5 : (_target2 = target(type)) === null || _target2 === void 0 ? void 0 : _target2.padding) !== null && _ref4 !== void 0 ? _ref4 : type.innerPadding) !== null && _ref3 !== void 0 ? _ref3 : (_target3 = target(card.default)) === null || _target3 === void 0 ? void 0 : _target3.padding) !== null && _ref2 !== void 0 ? _ref2 : card.default.innerPadding;
  };

  return /*#__PURE__*/React__default.createElement(Flex, Object.assign({
    role: "group",
    width: '100%',
    position: 'relative',
    flexDirection: 'column'
  }, props, {
    ref: ref
  }), (header || title) && /*#__PURE__*/React__default.createElement(Flex, null, /*#__PURE__*/React__default.createElement(Flex, Object.assign({
    order: 1
  }, _header, {
    padding: getPadding(function (x) {
      return x._header;
    })
  }), /*#__PURE__*/React__default.createElement(Flex, {
    flexGrow: 1
  }, header ? renderComponent(header) : /*#__PURE__*/React__default.createElement(Text, Object.assign({
    fontSize: '2rem',
    lineHeight: '3rem'
  }, _title), renderComponent(title))))), tag && /*#__PURE__*/React__default.createElement(Tag, Object.assign({
    position: "absolute",
    top: "0",
    right: "0",
    alignSelf: "center",
    m: (_header$p = _header === null || _header === void 0 ? void 0 : _header.p) !== null && _header$p !== void 0 ? _header$p : _header === null || _header === void 0 ? void 0 : _header.padding
  }, _tag), renderComponent(tag)), media && /*#__PURE__*/React__default.createElement(Flex, Object.assign({
    order: 2
  }, _media), renderComponent(media)), body && /*#__PURE__*/React__default.createElement(Flex, Object.assign({
    order: 3
  }, _body, {
    padding: getPadding(function (x) {
      return x._body;
    })
  }), renderComponent(body)), children && /*#__PURE__*/React__default.createElement(Flex, Object.assign({
    order: 3
  }, _body, {
    padding: getPadding(function (x) {
      return x._body;
    })
  }), children), footer && /*#__PURE__*/React__default.createElement(Flex, Object.assign({
    order: 4
  }, _footer, {
    padding: (_ref6 = (_footer$p = _footer === null || _footer === void 0 ? void 0 : _footer.p) !== null && _footer$p !== void 0 ? _footer$p : _footer === null || _footer === void 0 ? void 0 : _footer.padding) !== null && _ref6 !== void 0 ? _ref6 : innerPadding
  }), renderComponent(footer)));
});

/* eslint-disable max-len */
var CloseIcon = function CloseIcon() {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    viewBox: "0 0 8 8"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "#1E1E1E",
    fillRule: "evenodd",
    d: "M0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L1.70710678,0.292893219 L4,2.585 L6.29289322,0.292893219 C6.65337718,-0.0675907428 7.22060824,-0.0953202783 7.61289944,0.209704612 L7.70710678,0.292893219 C8.09763107,0.683417511 8.09763107,1.31658249 7.70710678,1.70710678 L7.70710678,1.70710678 L5.415,4 L7.70710678,6.29289322 C8.06759074,6.65337718 8.09532028,7.22060824 7.79029539,7.61289944 L7.70710678,7.70710678 C7.31658249,8.09763107 6.68341751,8.09763107 6.29289322,7.70710678 L6.29289322,7.70710678 L4,5.415 L1.70710678,7.70710678 C1.34662282,8.06759074 0.779391764,8.09532028 0.387100557,7.79029539 L0.292893219,7.70710678 C-0.0976310729,7.31658249 -0.0976310729,6.68341751 0.292893219,6.29289322 L0.292893219,6.29289322 L2.585,4 L0.292893219,1.70710678 C-0.0675907428,1.34662282 -0.0953202783,0.779391764 0.209704612,0.387100557 Z"
  }));
};

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var CloseControl = /*#__PURE__*/React.forwardRef(function (p, ref) {
  var _useTheme = useTheme(),
      closeControl = _useTheme.closeControl;

  var _useMerge = useMerge(p, sizeVariant(closeControl, 'md', p), closeControl.default),
      _icon = _useMerge._icon,
      props = _objectWithoutProperties(_useMerge, ["_icon"]);

  return /*#__PURE__*/React__default.createElement(CloseButtonStyle, Object.assign({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React__default.createElement(Icon, Object.assign({
    svg: /*#__PURE__*/React__default.createElement(CloseIcon, null)
  }, _icon)));
});
var CloseButtonStyle = styled__default.div.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$d(), composedFlexBase);

var Container = /*#__PURE__*/React.forwardRef(function (p, ref) {
  var _useTheme = useTheme(),
      container = _useTheme.container;

  var props = useMerge(p, typeVariant(container, 'normal', p), container.default);
  return /*#__PURE__*/React__default.createElement(Flex, Object.assign({}, props, {
    ref: ref
  }));
});

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  cursor: pointer;\n  & * {\n    cursor: pointer;\n  }\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var Link = /*#__PURE__*/React.forwardRef(function (p, ref) {
  var _useTheme = useTheme(),
      link = _useTheme.link;

  var props = useMerge(p, typeVariant(link, 'simple', p), link.default);
  return /*#__PURE__*/React__default.createElement(LinkStyle, Object.assign({}, props, {
    ref: ref
  }));
});
var LinkStyle = styled__default.a.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$e(), composedTextBase);

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  list-style-type: none;\n\n  & li {\n    display: flex;\n\n    ", "\n\n    &:before {\n      ", "\n    }\n  }\n\n  & li:last-child {\n    margin-bottom: 0;\n  }\n\n  ", "\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var List = /*#__PURE__*/React.forwardRef(function (p, ref) {
  var _ref, _p$v;

  var _useTheme = useTheme(),
      list = _useTheme.list;

  var type = (_ref = (_p$v = p.v) !== null && _p$v !== void 0 ? _p$v : p.variant) !== null && _ref !== void 0 ? _ref : 'unordered';
  var props = useMerge(p, typeVariant(list, 'unordered', p), list.default);
  return /*#__PURE__*/React__default.createElement(ListStyle, Object.assign({
    as: type === 'unordered' ? 'ul' : 'ol'
  }, props, {
    ref: ref
  }));
});
List.displayName = 'List';
var listSystem = core.system({
  counterReset: true
});
var itemSystem = core.system({
  paddingLeft: true,
  marginBottom: true,
  color: true,
  fontSize: true,
  lineHeight: true,
  counterIncrement: true
});
var bulletSystem = core.system({
  content: true,
  position: true,
  color: true,
  marginRight: true,
  width: true,
  fontSize: true,
  lineHeight: true
});
var ListStyle = styled__default.ul.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$f(), composedTextBase, function (p) {
  return itemSystem(polyfillTheme(p._items, p.theme));
}, function (p) {
  return bulletSystem(polyfillTheme(p._bullet, p.theme));
}, listSystem);

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}

var ListItem = function ListItem(p) {
  var _sideComp = sideComp(p),
      _sideComp2 = _slicedToArray(_sideComp, 2),
      comp = _sideComp2[0],
      _sideComp2$ = _sideComp2[1],
      children = _sideComp2$.children,
      props = _objectWithoutProperties(_sideComp2$, ["children"]);

  return /*#__PURE__*/React__default.createElement(ListItemStyle, Object.assign({
    alignItems: "flex-start"
  }, props), /*#__PURE__*/React__default.createElement(Complement, Object.assign({}, comp)), /*#__PURE__*/React__default.createElement("span", null, children));
};

var ListItemStyle = styled__default.li.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$g(), compose(flexBase, textBase));

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var Typography = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref2, _p$variant;

  var _as = _ref.as,
      p = _objectWithoutProperties(_ref, ["as"]);

  var _useTheme = useTheme(),
      typography = _useTheme.typography;

  var type = (_ref2 = (_p$variant = p.variant) !== null && _p$variant !== void 0 ? _p$variant : p.v) !== null && _ref2 !== void 0 ? _ref2 : 'p';
  var as = _as !== null && _as !== void 0 ? _as : type === 'lead' ? 'p' : type;
  var props = useMerge(p, typeVariant(typography, 'p', p), typography.default);
  return /*#__PURE__*/React__default.createElement(TypographyStyle, Object.assign({}, props, {
    as: as,
    ref: ref
  }));
});
var TypographyStyle = styled__default.p.withConfig({
  shouldForwardProp: shouldForwardProp
})(_templateObject$h(), composedTextBase);

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ModalContext = /*#__PURE__*/React.createContext({
  push: function push() {},
  replace: function replace() {},
  pop: function pop() {},
  go: function go() {},
  back: function back() {},
  forward: function forward() {}
});
var useModal = function useModal(modal, defaultProps) {
  var history = React.useContext(ModalContext);
  return [function (props) {
    return modal ? history.push(modal, _objectSpread$9(_objectSpread$9({}, defaultProps), props)) : history.pop();
  }, history.pop, history];
};
var useModalHistory = function useModalHistory() {
  return React.useContext(ModalContext);
};
var ModalInstanceContext = /*#__PURE__*/React.createContext({
  hide: false
});

var Modal = function Modal(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      p = _objectWithoutProperties(_ref, ["children", "onClose"]);

  var _useTheme = useTheme(),
      modal = _useTheme.modal;

  var _useContext = React.useContext(ModalInstanceContext),
      hide = _useContext.hide;

  var _useContext2 = React.useContext(ModalContext),
      pop = _useContext2.pop;

  var _useMerge = useMerge(p, sizeVariant(modal, 'md', p), modal.default),
      title = _useMerge.title,
      _title = _useMerge._title,
      header = _useMerge.header,
      _header = _useMerge._header,
      _close = _useMerge._close,
      _overlay = _useMerge._overlay,
      props = _objectWithoutProperties(_useMerge, ["title", "_title", "header", "_header", "_close", "_overlay"]);

  return /*#__PURE__*/React__default.createElement(InsetBox, Object.assign({
    horizontalPosition: "stretch",
    verticalPosition: "stretch",
    position: "fixed",
    display: hide ? 'none' : 'flex',
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3
  }, _overlay), /*#__PURE__*/React__default.createElement(Flex, Object.assign({
    flexDirection: "column",
    position: "relative"
  }, props), /*#__PURE__*/React__default.createElement(Box, {
    onClick: onClose !== null && onClose !== void 0 ? onClose : pop
  }, /*#__PURE__*/React__default.createElement(CloseControl, Object.assign({}, _close))), (header || title) && /*#__PURE__*/React__default.createElement(Flex, Object.assign({
    mb: "2rem"
  }, _header), header ? renderComponent(header) : /*#__PURE__*/React__default.createElement(Typography, Object.assign({
    v: "h3",
    as: "div"
  }, _title), renderComponent(title))), children));
};

var ModalProvider = function ModalProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState({
    position: -1,
    queue: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      position = _useState2$.position,
      queue = _useState2$.queue,
      setState = _useState2[1];

  var context = {
    push: function push(m, props) {
      setState(function (s) {
        return {
          position: s.position + 1,
          queue: [].concat(_toConsumableArray(s.queue), [[m, props]])
        };
      });
    },
    replace: function replace(m, props) {
      setState(function (s) {
        return {
          position: s.position + 1,
          queue: [].concat(_toConsumableArray(s.queue.slice(0, -1)), [[m, props]])
        };
      });
    },
    pop: function pop() {
      setState(function (s) {
        return {
          position: s.position - 1,
          queue: _toConsumableArray(s.queue.slice(0, -1))
        };
      });
    },
    go: function go(n) {
      return setState(function (s) {
        return {
          position: s.position + n,
          queue: s.queue
        };
      });
    },
    back: function back() {
      return setState(function (s) {
        return {
          position: s.position - 1,
          queue: s.queue
        };
      });
    },
    forward: function forward() {
      return setState(function (s) {
        return {
          position: s.position + 1,
          queue: s.queue
        };
      });
    }
  };
  return /*#__PURE__*/React__default.createElement(ModalContext.Provider, {
    value: context
  }, children, position !== -1 && queue.map(function (_ref2, i) {
    var _ref3 = _slicedToArray(_ref2, 2),
        m = _ref3[0],
        props = _ref3[1];

    return /*#__PURE__*/React__default.createElement(ModalInstanceContext.Provider, {
      key: i,
      value: {
        hide: i !== position
      }
    }, /*#__PURE__*/React.createElement(m, props));
  }));
};

var makeAlias = function makeAlias(v) {
  return /*#__PURE__*/React.forwardRef(function (p, ref) {
    return /*#__PURE__*/React__default.createElement(Text, Object.assign({
      v: v
    }, p, {
      ref: ref
    }));
  });
};
var Em = makeAlias('em');
var Strong = makeAlias('strong');
var Underline = makeAlias('underline');
var Abbr = makeAlias('abbr');
var Strikethrough = makeAlias('strikethrough');
var Sub = makeAlias('sub');
var Sup = makeAlias('sup');

var makeAlias$1 = function makeAlias(v) {
  return /*#__PURE__*/React.forwardRef(function (p, ref) {
    return /*#__PURE__*/React__default.createElement(Typography, Object.assign({
      v: v
    }, p, {
      ref: ref
    }));
  });
};

var Heading1 = makeAlias$1('h1');
var Heading2 = makeAlias$1('h2');
var Heading3 = makeAlias$1('h3');
var Heading4 = makeAlias$1('h4');
var Heading5 = makeAlias$1('h5');
var Heading6 = makeAlias$1('h6');
var Paragraph = makeAlias$1('p');
var Lead = makeAlias$1('lead');

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  html {\n    ", "\n  }\n\n  body {\n    ", "\n  }\n\n  *, *:before, *:after {\n    ", "\n  }\n\n  ::-moz-selection {\n    ", "\n  }\n\n  ::selection {\n    ", "\n  }\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}

var XcoreGlobal = function XcoreGlobal() {
  var _useTheme = useTheme(),
      global = _useTheme.global;

  return /*#__PURE__*/React__default.createElement(GlobalStyle, Object.assign({}, global));
};
var base$1 = compose(globalBase);
var GlobalStyle = styled.createGlobalStyle(_templateObject$i(), function (p) {
  return base$1(_objectSpread$a(_objectSpread$a({}, p._html), {}, {
    theme: p.theme
  }));
}, function (p) {
  return base$1(_objectSpread$a(_objectSpread$a({}, p._body), {}, {
    theme: p.theme
  }));
}, function (p) {
  return base$1(_objectSpread$a(_objectSpread$a({}, p._all), {}, {
    theme: p.theme
  }));
}, function (p) {
  return selectionBase(_objectSpread$a(_objectSpread$a({}, p._selection), {}, {
    theme: p.theme
  }));
}, function (p) {
  return selectionBase(_objectSpread$a(_objectSpread$a({}, p._selection), {}, {
    theme: p.theme
  }));
});

var XcoreProvider = function XcoreProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      disableGlobalStyles = _ref.disableGlobalStyles;
  return theme !== null ? /*#__PURE__*/React__default.createElement(styled.ThemeProvider, {
    theme: theme !== null && theme !== void 0 ? theme : emptyTheme
  }, !disableGlobalStyles && /*#__PURE__*/React__default.createElement(XcoreGlobal, null), /*#__PURE__*/React__default.createElement(ModalProvider, null, children)) : /*#__PURE__*/React__default.createElement(ModalProvider, null, children);
};

var useDisclosure = function useDisclosure() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useState = React.useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setState = _useState2[1];

  var open = function open() {
    return setState(true);
  };

  var close = function close() {
    return setState(false);
  };

  var toggle = function toggle() {
    return setState(!isOpen);
  };

  return {
    isOpen: isOpen,
    open: open,
    close: close,
    toggle: toggle
  };
};

exports.Abbr = Abbr;
exports.ActiveBreakpoint = ActiveBreakpoint;
exports.AspectRatio = AspectRatio;
exports.Box = Box;
exports.Button = Button;
exports.Card = Card;
exports.Cell = Cell;
exports.CloseControl = CloseControl;
exports.Collapse = Collapse;
exports.Container = Container;
exports.Em = Em;
exports.Flex = Flex;
exports.Grid = Grid;
exports.Heading1 = Heading1;
exports.Heading2 = Heading2;
exports.Heading3 = Heading3;
exports.Heading4 = Heading4;
exports.Heading5 = Heading5;
exports.Heading6 = Heading6;
exports.Icon = Icon;
exports.Img = Img;
exports.InsetBox = InsetBox;
exports.Lead = Lead;
exports.Link = Link;
exports.List = List;
exports.ListItem = ListItem;
exports.LoremIpsum = LoremIpsum;
exports.Modal = Modal;
exports.ModalContext = ModalContext;
exports.ModalProvider = ModalProvider;
exports.OutsetBox = OutsetBox;
exports.Paragraph = Paragraph;
exports.SimpleGrid = SimpleGrid;
exports.Spinner = Spinner;
exports.Stack = Stack;
exports.Strikethrough = Strikethrough;
exports.Strong = Strong;
exports.Sub = Sub;
exports.Sup = Sup;
exports.Tag = Tag;
exports.Text = Text;
exports.Typography = Typography;
exports.Underline = Underline;
exports.XcoreGlobal = XcoreGlobal;
exports.XcoreProvider = XcoreProvider;
exports.adjustHue = adjustHue;
exports.breakpoints = breakpoints;
exports.button = button;
exports.card = card;
exports.closeControl = closeControl;
exports.colors = colors;
exports.container = container;
exports.createScales = createScales;
exports.createTheme = createTheme;
exports.darkColorTheme = darkColorTheme;
exports.darken = darken;
exports.desaturate = desaturate;
exports.fonts = fonts;
exports.global = global;
exports.lightColorTheme = lightColorTheme;
exports.lighten = lighten;
exports.link = link;
exports.list = list;
exports.modal = modal;
exports.opacify = opacify;
exports.saturate = saturate;
exports.shade = shade;
exports.tag = tag;
exports.text = text;
exports.tint = tint;
exports.transparentize = transparentize;
exports.typography = typography;
exports.useDisclosure = useDisclosure;
exports.useModal = useModal;
exports.useModalHistory = useModalHistory;
exports.useTheme = useTheme;
//# sourceMappingURL=index.js.map
