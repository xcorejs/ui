import styled, { css, ThemeContext, keyframes, createGlobalStyle, ThemeProvider } from 'styled-components';
import { get, system } from '@styled-system/core';
import { adjustHue as adjustHue$1, tint as tint$1, shade as shade$1, desaturate as desaturate$1, saturate as saturate$1, transparentize as transparentize$1, opacify as opacify$1, lighten as lighten$1, darken as darken$1 } from 'polished';
import React, { useContext, useMemo, forwardRef, createElement, createContext, Children, isValidElement, cloneElement, useState, useLayoutEffect, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
import { loremIpsum } from 'lorem-ipsum';
import Portal from '@reach/portal';
import { useDebouncedCallback } from 'use-debounce';

const merge = (target, ...sources) => {
  const next = appendTo({}, target);
  sources.forEach(s => appendTo(next, s));
  return appendTo({}, next);
};

const appendTo = (t, s) => {
  Object.keys(s).reverse().forEach(k => {
    t[k] && k[0] === '_' && typeof t[k] === 'object' ? appendTo(t[k], s[k]) : !(k in t) && (t[k] = s[k]);
  });
  return t;
};

const mergeThemes = (target, source) => target ? mergeThemePair(target, source) : source;

const mergeThemePair = (target, source) => {
  const next = { ...target,
    default: target.default ? merge(target.default, source.default) : source.default
  };
  Object.keys(source).forEach(k => k !== 'default' && (next[k] = mergeVariantPair(target[k], source[k])));
  return next;
};

const mergeVariantPair = (target, source) => {
  const next = { ...target
  };
  Object.keys(source).forEach(k => {
    next[k] = target && target[k] ? merge(target[k], source[k]) : source[k];
  });
  return next;
};

const scale = (values, aliases) => {
  const s = aliases.reduce((acc, val, i) => {
    // @ts-ignore
    acc[val] = values[i];
    return acc;
  }, [...values]);
  s.aliases = aliases;
  return s;
};
const defaultsScale = (target, ...sources) => sources.reduce((acc, source) => defaultsScalePair(acc, source), target);

const defaultsScalePair = (t, s) => Object.keys(s).reduce((acc, k) => {
  var _acc$k;

  return { ...acc,
    [k]: typeof acc[k] === 'object' && !Array.isArray(t) ? { ...s[k],
      ...acc[k]
    } : (_acc$k = acc[k]) !== null && _acc$k !== void 0 ? _acc$k : s[k]
  };
}, t);

const colors = (base = lightColorTheme, c = {}) => ({
  colors: defaultsScale(c, base)
});
const lightColorTheme = {
  primary: '#0171b6',
  text: '#1E3441',
  background: '#fff'
};
const darkColorTheme = {
  primary: '#DAA520',
  text: '#fff',
  background: '#211E15'
};
const colorMod = func => (color, amount) => `__$${func};${color};${amount}`;
const darken = colorMod('darken');
const lighten = colorMod('lighten');
const opacify = colorMod('opacify');
const transparentize = colorMod('transparentize');
const saturate = colorMod('saturate');
const desaturate = colorMod('desaturate');
const shade = colorMod('shade');
const tint = colorMod('tint');
const adjustHue = colorMod('adjustHue');
const colorTransform = (val, s) => {
  const scale = s;

  if (typeof val === 'string' && val.startsWith('__')) {
    const reg = /__\$(.+);(\S+);(\S+)/.exec(val);

    if (reg) {
      const [_, func, color, amount] = reg;
      const a = Number(amount);
      const value = get(scale, color, lightColorTheme[color] || color);

      switch (func) {
        case 'darken':
          return darken$1(a, value);

        case 'lighten':
          return lighten$1(a, value);

        case 'opacify':
          return opacify$1(a, value);

        case 'transparentize':
          return transparentize$1(a, value);

        case 'saturate':
          return saturate$1(a, value);

        case 'desaturate':
          return desaturate$1(a, value);

        case 'shade':
          return shade$1(a, value);

        case 'tint':
          return tint$1(a, value);

        case 'adjustHue':
          return adjustHue$1(a, value);
      }
    }

    return get(scale, val, lightColorTheme[val] || val);
  }

  return get(scale, val, lightColorTheme[val] || val);
};

const button = b => ({
  button: mergeThemes(b, emptyButton)
});
const emptyButton = {
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

const card = c => ({
  card: mergeThemes(c, emptyCard)
});
const emptyCard = {
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

const container = c => ({
  container: mergeThemes(c, emptyContainer)
});
const emptyContainer = {
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

const link = l => ({
  link: mergeThemes(l, emptyLink)
});
const emptyLink = {
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

const list = l => ({
  list: mergeThemes(l, emptyList)
});
const emptyList = {
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

const tag = t => ({
  tag: mergeThemes(t, emptyTag)
});
const emptyTag = {
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

const text = t => ({
  text: mergeThemes(t, emptyText)
});
const emptyText = {
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

const typography = t => ({
  typography: mergeThemes(t, emptyTypography)
});
const emptyTypography = {
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

const global = (g = emptyGlobal) => ({
  global: merge(g, emptyGlobal)
});
const emptyGlobal = {
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

const breakpoints = (b = ['30em', '48em', '64em', '78em', '85em'], aliases = ['xs', 'sm', 'md', 'lg', 'xl']) => ({
  breakpoints: scale(b, aliases)
});

const fonts = (f = emptyFonts) => ({
  fonts: defaultsScale(f, emptyFonts)
});
const emptyFonts = {
  // eslint-disable-next-line max-len
  heading: '"rubik",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  text: '"rubik",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji'
};

const createScales = (scale = {}) => ({ ...colors(),
  ...breakpoints(),
  ...fonts(),
  ...scale
});

const closeControl = c => ({
  closeControl: mergeThemes(c, emptyCloseControl)
});
const emptyCloseControl = {
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

const modal = m => ({
  modal: mergeThemes(m, emptyModal)
});
const emptyModal = {
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

const createTheme = (theme = {}) => ({
  ['__xcoreTheme']: true,
  name: 'Xcore',
  ...global(),
  ...container(),
  ...text(),
  ...button(),
  ...typography(),
  ...link(),
  ...tag(),
  ...card(),
  ...list(),
  ...createScales(),
  ...closeControl(),
  ...modal(),
  ...theme
});
const emptyTheme = createTheme();

const base = (inherits, b) => {
  const f = p => b(p);

  f.inherits = inherits;
  return f;
};
const polyfillTheme = (p, theme = emptyTheme) => p && (!('theme' in p) || p.theme === undefined || Object.keys(p.theme).length === 0 ? { ...p,
  theme
} : p);
const compose = (...bases) => {
  const flattenBases = Array.from(new Set(flatten(bases)));
  return p => flattenBases.map(b => b(polyfillTheme(p)));
};

const flatten = bases => bases.reduce((acc, b) => b.inherits ? [...acc, ...flatten(b.inherits)] : acc, bases);

const borderConfig = {
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

const cursorConfig = {
  cursor: true,
  userSelect: true,
  pointerEvents: true
};

const flexConfig = {
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

const gridItemConfig = {
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

const isNumber = n => typeof n === 'number' && !isNaN(n);

const getWidth = (n, scale) => get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');

const layoutConfig = {
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

const defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const positionConfig = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale
  }
};

const shadowConfig = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
};

const defaultScale$1 = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const isNumber$1 = n => typeof n === 'number' && !isNaN(n);

const getMargin = (n, scale) => {
  if (!isNumber$1(n)) {
    return get(scale, n, n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(scale, absolute, absolute);

  if (!isNumber$1(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

const getMarginConfig = property => ({
  property,
  scale: 'space',
  transform: getMargin,
  defaultScale: defaultScale$1
});

const getPaddingConfig = property => ({
  property,
  scale: 'space',
  defaultScale: defaultScale$1
});

const spaceConfig = {
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

const defaultScale$2 = [12, 14, 16, 20, 24, 32, 48, 64, 72];
const typographyConfig = {
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

const visualsConfig = {
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

const selectionSystem = system({
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
const boxSystem = system({ ...layoutConfig,
  ...spaceConfig,
  ...typographyConfig,
  ...visualsConfig,
  ...borderConfig,
  ...flexConfig,
  ...gridItemConfig,
  ...positionConfig,
  ...cursorConfig,
  ...shadowConfig,
  animation: true,
  transition: true,
  transform: true,
  filter: true,
  outline: true,
  outlineOffset: true
});
const pseudoBoxSystem = system({
  content: true
});
const globalSystem = system({
  boxSizing: {
    property: 'boxSizing'
  }
});
const flexSystem = system({
  display: true
});
const textSystem = system({
  textTransform: true,
  WebkitLineClamp: true,
  WebkitBoxOrient: true,
  textOverflow: true,
  whiteSpace: true,
  textDecoration: true,
  wordBreak: true
});
const pathSystem = system({
  fill: {
    property: 'fill',
    scale: 'colors'
  }
});
const pathHoverSystem = system({
  fillHover: {
    property: 'fill',
    scale: 'colors'
  }
});

const selectionBase = p => css`
  ${selectionSystem(p)}
`;
const boxBase = p => css`
  ${boxSystem(p)}

  ${p._icon && css`
      & path {
        ${pseudoBoxBaseComposed({ ...p._icon,
  theme: p.theme
})}
        ${pathSystem({ ...p._icon,
  theme: p.theme
})}
      }
  `}

  ${p._selection && css`
      & *::selection {
        ${selectionBase({ ...p._selection,
  theme: p.theme
})}
      }
  `}

  ${Object.keys(pseudoSelectors).map(k => p[k] && css`
      ${pseudoSelectors[k]} {
        ${pseudoBoxBaseComposed({ ...p[k],
  theme: p.theme
})}
      }
  `)}

  ${p._group && Object.keys(groupPseudoSelectors).map(k => p._group[k] && css`
      ${groupPseudoSelectors[k]} {
        ${pseudoBoxBaseComposed({ ...p._group[k],
  theme: p.theme
})}
      }
  `)}
`;
const composedBoxBase = compose(boxBase);
const pseudoBoxBase = base([boxBase], p => css`
  ${pseudoBoxSystem(p)}
`);
const pseudoBoxBaseComposed = compose(pseudoBoxBase);
const globalBase = base([boxBase], ({
  webkitFontSmoothing,
  ...p
}) => css`
  ${globalSystem(p)}
`);
const flexBase = base([boxBase], p => {
  var _p$display;

  return css`
  ${flexSystem({
    display: (_p$display = p.display) !== null && _p$display !== void 0 ? _p$display : 'flex'
  })}
`;
});
const composedFlexBase = compose(flexBase);
const iconBase = base([flexBase], p => css`
  flex-shrink: 0;
  backface-visibility: hidden;

  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;

    path {
      transition: fill 300ms;
      ${pathSystem(p)}
    }
  }

  &:not(:root) {
    overflow: hidden;
  }

  &:hover {
    svg path {
      ${pathHoverSystem(p)}
    }
  }
`);
const composedIconBase = compose(iconBase);
const textBase = base([boxBase], p => css`
  ${textSystem(p)}
`);
const composedTextBase = compose(textBase);
const pseudoSelectors = {
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
const groupPseudoSelectors = {
  _hover: '[role=group]:hover &',
  _active: '[role=group]:active &',
  _focus: '[role=group]:focus &'
};

const defaultScale$3 = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const gridConfig = {
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

const shouldForwardProp = (prop, isValidAttr) => isValidAttr(prop) && (typeof prop !== 'string' || !(prop[0] === '_' || blacklist.includes(prop)));
const blacklist = [...Object.keys(selectionSystem), ...Object.keys(borderConfig), ...Object.keys(cursorConfig), ...Object.keys(flexConfig), ...Object.keys(gridConfig), ...Object.keys(gridItemConfig), ...Object.keys(layoutConfig), ...Object.keys(positionConfig), ...Object.keys(shadowConfig), ...Object.keys(spaceConfig), ...Object.keys(typographyConfig), ...Object.keys(visualsConfig)];

const Box = styled.div.withConfig({
  shouldForwardProp
})`
  ${compose(boxBase)}
`;

const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme !== null && theme !== void 0 ? theme : emptyTheme;
};

const useMerge = (target, ...sources) => useMemo(() => merge(target, ...sources), [target, ...sources]);

const variant = (variants, def, ...aliases) => {
  var _aliases$reduce;

  return (_aliases$reduce = aliases.reduce((acc, val) => acc !== null && acc !== void 0 ? acc : variants[val], undefined)) !== null && _aliases$reduce !== void 0 ? _aliases$reduce : variants[def];
};
const typeVariant = (theme, def, props) => variant(theme.variants, def, props.v, props.variant);
const sizeVariant = (theme, def, props) => variant(theme.sizes, def, props.s, props.size);

const Text = /*#__PURE__*/forwardRef(({
  as: _as,
  ...p
}, ref) => {
  var _ref, _p$variant;

  const {
    text
  } = useTheme();
  const as = _as !== null && _as !== void 0 ? _as : {
    span: 'span',
    em: 'em',
    strong: 'strong',
    underline: 'u',
    abbr: 'abbr',
    strikethrough: 's',
    sub: 'sub',
    sup: 'sup'
  }[(_ref = (_p$variant = p.variant) !== null && _p$variant !== void 0 ? _p$variant : p.v) !== null && _ref !== void 0 ? _ref : 'span'];
  const props = useMerge(p, typeVariant(text, 'span', p), text.default);
  return /*#__PURE__*/React.createElement(TextStyle, Object.assign({}, props, {
    as: as,
    ref: ref
  }));
});
const TextStyle = styled.span.withConfig({
  shouldForwardProp
})`
  ${composedTextBase}
`;

const ActiveBreakpoint = props => {
  const {
    breakpoints
  } = useTheme();
  const style = breakpoints.aliases.map(() => 'none');
  return /*#__PURE__*/React.createElement(Box, Object.assign({}, props), /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement(Box, {
    display: ['block', ...style.slice(1, style.length - 1)]
  }, "[0]: \"_\" (0 - ", breakpoints[0], ")"), breakpoints.aliases.map((a, i) => /*#__PURE__*/React.createElement(Box, {
    key: a,
    display: [...style.slice(0, i + 1), 'block', ...style.slice(i + 2)]
  }, "[", i + 1, "]: \"", a, "\" (", breakpoints[i], " - ", i === breakpoints.length - 1 ? '∞' : breakpoints[i + 1], ")"))));
};

const Flex = styled.div.withConfig({
  shouldForwardProp
})`
  ${composedFlexBase}
`;
Flex.displayName = 'Flex';

const AspectRatioStyle = styled.div.withConfig({
  shouldForwardProp
})`
  ${composedBoxBase}

  & > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  img {
    object-fit: cover;
  }
`;

const AspectRatio = ({
  ratio,
  children,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(AspectRatioStyle, Object.assign({
    width: "100%",
    height: 0,
    pb: ratio * 100 + '%',
    position: "relative"
  }, props), /*#__PURE__*/React.createElement(Flex, {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0
  }, children));
};

const Collapse = ({
  open,
  start = 0,
  end = 'auto',
  ...props
}) => /*#__PURE__*/React.createElement(AnimateHeight, {
  height: open ? end : start
}, /*#__PURE__*/React.createElement(Box, Object.assign({}, props)));

const renderComponent = c => typeof c === 'function' ? /*#__PURE__*/createElement(c) : c;

const Icon = ({
  svg,
  children,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(IconStyle, Object.assign({
    display: "inline-block",
    verticalAlign: "middle",
    maxHeight: "100%"
  }, props), renderComponent(svg), children);
};
const IconStyle = styled.span.withConfig({
  shouldForwardProp
})`
  ${composedIconBase}
`;

const Img = ({ ...props
}) => /*#__PURE__*/React.createElement(ImgStyle, Object.assign({}, props));
const imgSystem = system({
  objectFit: true
});
const ImgStyle = styled.img.withConfig({
  shouldForwardProp
})`
  ${composedBoxBase}
  ${imgSystem}
`;

const pseudoRandomGenerator = () => {
  let acc = 0.5;
  return () => {
    acc = acc * 1.6564534 % 1;
    return acc;
  };
};

const LoremIpsum = /*#__PURE__*/forwardRef(({
  count,
  units,
  random,
  ...props
}, ref) => {
  const pseudoRandom = useMemo(() => pseudoRandomGenerator(), []);
  const text = useMemo(() => loremIpsum({
    count,
    units: units !== null && units !== void 0 ? units : 'paragraphs',
    random: random ? Math.random : pseudoRandom
  }), [count, units]);
  return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
    ref: ref
  }), text);
});

const repeatRegex = /(repeat\()([0-9]+)( *, *)(.+)(\))/; // Basicaly split by " " but dont split functions like repeat

const parseTemplate = (template, gap) => parse(template.split('').reduce(([result, current, indent], val) => val === ' ' && indent === 0 ? parse([result, current, indent], gap) : val === '(' ? [result, current + val, indent + 1] : val === ')' ? [result, current + val, indent - 1] : [result, current + val, indent], [[], '', 0]), gap, true)[0];

const parse = ([result, current], gap, last) => [[...result, ...(repeatRegex.test(current) ? repeat(current, gap) : [current]), ...(!last && gap ? [gap] : [])], '', 0];

const repeat = (r, gap) => {
  const [_, __, count, ___, val] = repeatRegex.exec(r);
  const n = parseInt(count);
  return getTemplate(n, val, gap);
};

const getTemplate = (n, val, gap) => {
  const length = gap ? n * 2 - 1 : n;
  return [...Array(length >= 0 ? length : 0)].map((v, i) => i % 2 === 1 ? gap !== null && gap !== void 0 ? gap : val : val);
};
const parseTwin = val => {
  if (!val) {
    return [null, null];
  }

  const [a, b] = val.split(' ');
  return [a, b || a];
};

const mediaQueries = (breakpoints, predicate) => breakpoints.map((br, i) => {
  const val = filterVal(predicate(i, br));
  return isValueEmpty(val) ? '' : i === 0 ? val : css`
            @media screen and (min-width: ${breakpoints[i - 1]}) {
              ${val}
            }
          `;
});

const isValueEmpty = val => // eslint-disable-next-line @typescript-eslint/no-extra-parens
val === false || val === undefined || Array.isArray(val) && val.length === 0;

const filterVal = val => Array.isArray(val) ? val.filter(Boolean) : val;

const transform = breakpoints => val => typeof val === 'object' && val !== null ? Array.isArray(val) ? transformArray(breakpoints, val) : transformObject(breakpoints, val) : transformValue(breakpoints, val);

const transformArray = (breakpoints, val) => ({
  map: unit => val.map((x, i) => {
    var _unit;

    return x !== null && x !== undefined ? (_unit = unit(x, i)) !== null && _unit !== void 0 ? _unit : null : null;
  }),
  mapAll: unit => val.map(unit),
  reduce: null,
  get: index => {
    var _val$numIndex;

    const numIndex = typeof index === 'number' ? index : index === '_' ? 0 : breakpoints.aliases.indexOf(index) + 1;
    return (_val$numIndex = val[numIndex]) !== null && _val$numIndex !== void 0 ? _val$numIndex : val.reduceRight((acc, v, i) => acc === null && i < numIndex ? v : acc, null);
  },
  empty: i => {
    const numIndex = typeof i === 'number' ? i : i === '_' ? 0 : breakpoints.aliases.indexOf(i) + 1;
    return val[numIndex] === null || val[numIndex] === undefined;
  },
  value: val,
  type: 'array'
});

const transformObject = (breakpoints, val) => ({
  map: unit => Object.keys(val).reduce((acc, k) => {
    const v = val[k] === undefined ? val[k] : unit(val[k], k);
    return v !== null && v !== undefined ? { ...acc,
      [k]: v
    } : acc;
  }, {}),
  mapAll: null,
  reduce: null,
  get: index => {
    var _breakpoints$aliases, _ref, _val$key;

    const key = typeof index === 'string' ? index : (_breakpoints$aliases = breakpoints.aliases[index - 1]) !== null && _breakpoints$aliases !== void 0 ? _breakpoints$aliases : '_';
    return (_ref = (_val$key = val[key]) !== null && _val$key !== void 0 ? _val$key : // Look for value in previous values
    ['_', ...breakpoints.aliases].reduceRight((acc, k) => k === key ? null : acc === null && val[k] ? val[k] : acc, undefined)) !== null && _ref !== void 0 ? _ref : // Return null instead of undefined
    null;
  },
  empty: i => {
    var _breakpoints$aliases2;

    const key = typeof i === 'string' ? i : (_breakpoints$aliases2 = breakpoints.aliases[i - 1]) !== null && _breakpoints$aliases2 !== void 0 ? _breakpoints$aliases2 : '_';
    return val[key] === null || val[key] === undefined;
  },
  value: val,
  type: 'object'
});

const transformValue = (breakpoints, val) => ({
  map: unit => {
    var _unit2;

    return val !== null && val !== undefined ? (_unit2 = unit(val, 0)) !== null && _unit2 !== void 0 ? _unit2 : null : null;
  },
  mapAll: unit => unit(val, 0),
  reduce: (unit, initialValue) => val ? unit(initialValue, val, 0) : initialValue,
  get: _ => val !== null && val !== void 0 ? val : null,
  empty: i => i !== 0 || val === null || val === undefined,
  value: val,
  type: 'value'
});

const GridContext = /*#__PURE__*/createContext({
  gap: []
});
const Grid = /*#__PURE__*/forwardRef(({
  columns,
  rows,
  gap,
  ...props
}, ref) => {
  const {
    breakpoints
  } = useTheme();
  const t = transform(breakpoints);
  return /*#__PURE__*/React.createElement(GridContext.Provider, {
    value: {
      gap
    }
  }, /*#__PURE__*/React.createElement(GridStyle, Object.assign({
    columns: t(columns),
    rows: t(rows),
    gap: t(gap),
    breakpoints: breakpoints,
    ref: ref
  }, props)));
});
Grid.displayName = 'Grid';
const GridStyle = styled.div.withConfig({
  shouldForwardProp
})`
  ${composedBoxBase}

  display: grid;
  display: -ms-grid;

  ${p => gridSystem(polyfillTheme({ ...p,
  rows: p.rows.value,
  columns: p.columns.value,
  gap: p.gap.value
}))}

  ${({
  columns,
  rows,
  gap,
  breakpoints
}) =>  mediaQueries(breakpoints, i => {
  const colVal = columns.get(i);
  const rowVal = rows.get(i);
  const gapVal = parseTwin(gap.get(i));
  return !(columns.empty(i) && rows.empty(i) && gap.empty(i)) && css`
        ${!(columns.empty(i) && gap.empty(i)) && css`
          -ms-grid-columns: ${parseTemplate(colVal, gapVal ? gapVal[0] : null).join(' ')};
        `}

        ${!(rows.empty(i) && gap.empty(i)) && css`
          -ms-grid-rows: ${parseTemplate(rowVal, gapVal ? gapVal[1] : null).join(' ')};
        `}

        ${templateQueries(parseTemplate(colVal), parseTemplate(rowVal), !!gapVal)}
      `;
})}
`;
const gridSystem = system(gridConfig);

const templateQueries = (columns, rows, gap) => css`
  ${rows.map((_, y) => css`
      ${columns.map((c, x) => css`
        & > *:nth-child(${y * columns.length + x + 1}) {
          -ms-grid-column: ${gap ? 2 * x + 1 : x + 1};
          -ms-grid-row: ${gap ? 2 * y + 1 : y + 1};
        }
      `)}
    `)}
`;

const SimpleGrid = ({
  columns,
  unit: _unit,
  children,
  gap: _gap,
  ...props
}) => {
  const {
    breakpoints
  } = useTheme();
  const t = transform(breakpoints);
  const cols = t(columns);
  const gapRow = t(t(_gap).map(g => g && parseTwin(g)[1]));
  const unit = t(_unit);
  return /*#__PURE__*/React.createElement(Grid, Object.assign({
    columns: cols.map((c, i) => {
      var _unit$get;

      return `repeat(${c}, ${(_unit$get = unit.get(i)) !== null && _unit$get !== void 0 ? _unit$get : '1fr'})`;
    }),
    rows: breakpoints.map((_, i) => {
      var _unit$get2;

      return !gapRow.empty(i) || !cols.empty(i) || !unit.empty(i) ? `repeat(${Math.ceil(Children.count(children) / cols.get(i))}, ${(_unit$get2 = unit.get(i)) !== null && _unit$get2 !== void 0 ? _unit$get2 : '1fr'})` : null;
    }),
    gap: _gap
  }, props), children);
};

const Spinner = props => {
  return /*#__PURE__*/React.createElement(SpinnerStyle, Object.assign({
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
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const SpinnerStyle = styled.div.withConfig({
  shouldForwardProp
})`
  ${composedBoxBase}

  animation: ${spin} ${({
  speed
}) => speed} linear infinite;
`;

const Stack = ({
  direction: _direction,
  dir: _dir,
  align,
  justify,
  wrap,
  gap: _gap,
  children,
  wrapItems,
  ...props
}) => {
  var _ref;

  const {
    breakpoints
  } = useTheme();
  const t = transform(breakpoints);
  const direction = t((_ref = _direction !== null && _direction !== void 0 ? _direction : _dir) !== null && _ref !== void 0 ? _ref : 'row');
  const gap = t(_gap);
  const itemStyle = ['_', ...breakpoints.aliases].reduce((acc, val) => {
    const d = direction.get(val);
    const g = gap.get(val);
    return {
      mb: [...acc.mb, d === 'column' ? g : 0],
      mr: [...acc.mr, d === 'row' ? g : 0]
    };
  }, {
    mb: [],
    mr: []
  });
  const maxWidth = direction.map(d => d === 'column' ? '100%' : null);

  const getStyle = i => {
    const last = Children.count(children) === i + 1;
    return {
      mb: last ? 0 : itemStyle.mb,
      mr: last ? 0 : itemStyle.mr,
      maxWidth
    };
  };

  return /*#__PURE__*/React.createElement(Flex, Object.assign({
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction.value,
    flexWrap: wrap
  }, props), Children.map(children, (child, i) => wrapItems ? /*#__PURE__*/React.createElement(Box, Object.assign({}, getStyle(i)), child) : /*#__PURE__*/isValidElement(child) ? /*#__PURE__*/cloneElement(child, getStyle(i)) : child));
};

const parseGridCell = val => typeof val === 'number' ? [val.toString(), undefined] : val.split('/');
const parseGridAxis = (axis, gap) => {
  if (axis === null) {
    return [undefined, undefined];
  }

  const [start, end] = parseGridCell(axis);

  const getIndex = n => gap ? 2 * n - 1 : n;

  return [getIndex(Number(start)), parseSpan(end, Number(start), getIndex)];
};
const parseSpan = (end, start, getIndex) => !end ? undefined : end.includes('span') ? getIndex(Number(end.replace('span', ''))) : getIndex(Number(end)) - getIndex(start);

const Cell = ({
  column,
  gridColumn,
  row,
  gridRow,
  ...props
}) => {
  const {
    breakpoints
  } = useTheme();
  const {
    gap
  } = useContext(GridContext);
  return /*#__PURE__*/React.createElement(CellStyle, Object.assign({
    column: column !== null && column !== void 0 ? column : gridColumn,
    row: row !== null && row !== void 0 ? row : gridRow,
    gap: gap,
    breakpoints: breakpoints
  }, props));
};
const CellStyle = styled.div.withConfig({
  shouldForwardProp
})`
  ${composedBoxBase}

  ${p =>  [// Styled system properties
cellSystem(polyfillTheme(p)), // Manually position element in grid and handle place-self property
mediaQueries(p.breakpoints, i => {
  const t = transform(p.breakpoints);
  const column = t(p.column);
  const row = t(p.row);
  const gap = t(p.gap);
  const [gc, gr] = parseTwin(gap.get(i));
  const [colStart, colEnd] = parseGridAxis(column.get(i), !!gc);
  const [rowStart, rowEnd] = parseGridAxis(row.get(i), !!gr);
  const placeSelf = transform(p.breakpoints)(p.placeSelf).get(i);
  const s = placeSelf === null || placeSelf === void 0 ? void 0 : placeSelf.split(' ');
  return [// Grid position
  (!column.empty(i) || !gap.empty(i)) && colStart && css`
            -ms-grid-column: ${colStart} !important;
          `, (!column.empty(i) || !gap.empty(i)) && colEnd && css`
            -ms-grid-column-span: ${colEnd} !important;
          `, (!row.empty(i) || !gap.empty(i)) && rowStart && css`
            -ms-grid-row: ${rowStart} !important;
          `, (!row.empty(i) || !gap.empty(i)) && rowEnd && css`
            -ms-grid-row-span: ${rowEnd} !important;
          `, // place-self
  s && css`
            -ms-grid-row-align: ${s[0]};
            -ms-grid-column-align: ${s[1] ? s[1] : s[0]};
          `];
})]}

`;
const cellSystem = system({
  alignSelf: {
    properties: ['-ms-flex-item-align', '-ms-grid-row-align']
  },
  justifySelf: {
    property: '-ms-grid-column-align'
  }
});

const InsetBox = ({
  target,
  ...p
}) => {
  const [rect, setRect] = useState({
    x: null,
    y: null,
    width: null,
    height: null
  });
  useLayoutEffect(() => {
    if (target === null || target === void 0 ? void 0 : target.current) {
      const {
        x,
        y,
        width,
        height
      } = target.current.getBoundingClientRect();

      if (x !== rect.x || y !== rect.y || width !== rect.width || height !== rect.height) {
        setRect({
          x,
          y,
          width,
          height
        });
      }
    }
  });
  return /*#__PURE__*/React.createElement(Portal, null, target ? /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    left: rect.x,
    top: rect.y,
    width: rect.width,
    height: rect.height
  }, /*#__PURE__*/React.createElement(Box, {
    position: "relative",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement(InnerInsetBox, Object.assign({}, p)))) : /*#__PURE__*/React.createElement(InnerInsetBox, Object.assign({}, p)));
};

const InnerInsetBox = ({
  h,
  horizontalPosition,
  v,
  verticalPosition,
  ...props
}) => {
  const {
    breakpoints
  } = useTheme();
  const t = transform(breakpoints);
  const hor = t(h !== null && h !== void 0 ? h : horizontalPosition);
  const ver = t(v !== null && v !== void 0 ? v : verticalPosition);
  return /*#__PURE__*/React.createElement(Box, Object.assign({
    position: "absolute",
    top: ver.map(y => y === 'top' || y === 'stretch' ? 0 : y === 'center' ? '50%' : null),
    bottom: ver.map(y => y === 'bottom' || y === 'stretch' ? 0 : null),
    left: hor.map(x => x === 'left' || x === 'stretch' ? 0 : x === 'center' ? '50%' : null),
    right: hor.map(x => x === 'right' || x === 'stretch' ? 0 : null),
    transform: ver.map((y, i) => `${y === 'center' ? 'translateY(-50%)' : ''} ${hor.get(i) === 'center' ? 'translateX(-50%)' : ''}`)
  }, props));
};

const OutsetBox = ({
  h,
  horizontalPosition,
  v,
  verticalPosition,
  target,
  ...props
}) => {
  const {
    breakpoints
  } = useTheme();
  const tr = transform(breakpoints);
  const hor = tr(h !== null && h !== void 0 ? h : horizontalPosition);
  const ver = tr(v !== null && v !== void 0 ? v : verticalPosition);
  const [{
    top,
    left,
    right,
    bottom
  }, setRect] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  const t = target instanceof Element ? target : target.current;

  const up = () => {
    const rect = t.getBoundingClientRect();

    if (top !== rect.top || left !== rect.left || right !== rect.right || bottom !== rect.bottom) {
      setRect({
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom
      });
    }
  };

  const [update] = useDebouncedCallback(up, 500);
  useLayoutEffect(() => {
    t && up();
  });
  useEffect(() => {
    const handler = () => update();

    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    left: hor.map(y => y === 'right' ? right : y === 'center' ? left : null),
    right: hor.map(y => y === 'left' ? `calc(100vw - ${left}px)` : y === 'center' ? `calc(100vw - ${right}px)` : null),
    bottom: ver.map(x => x === 'top' ? `calc(100vh - ${top}px)` : x === 'center' ? `calc(100vh - ${bottom}px)` : null),
    top: ver.map(x => x === 'bottom' ? bottom : x === 'center' ? top : null)
  }, /*#__PURE__*/React.createElement(Box, Object.assign({}, props))));
};

const sideComp = ({
  _icon,
  icon,
  element,
  ...props
}) => [{
  _icon,
  icon,
  element
}, props];
const comp = ({
  _rightIcon,
  rightIcon,
  rightElement,
  _leftIcon,
  leftIcon,
  leftElement,
  ...props
}) => [{
  _icon: _leftIcon,
  icon: leftIcon,
  element: leftElement
}, {
  _icon: _rightIcon,
  icon: rightIcon,
  element: rightElement
}, props];

const Complement = ({
  _icon,
  icon,
  element
}) => /*#__PURE__*/React.createElement(React.Fragment, null, renderComponent(element), icon && /*#__PURE__*/React.createElement(Icon, Object.assign({
  mr: "1rem",
  svg: icon
}, _icon)));

const Button = /*#__PURE__*/forwardRef(({
  loading,
  as = 'button',
  children,
  ...p
}, ref) => {
  const {
    button
  } = useTheme();
  const m = useMerge(p, typeVariant(button, 'solid', p), sizeVariant(button, 'md', p), button.default);
  const [left, right, {
    _spinner,
    ...props
  }] = comp(m);
  return /*#__PURE__*/React.createElement(ButtonStyle, Object.assign({
    role: "group",
    as: as
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Complement, Object.assign({}, left)), loading && /*#__PURE__*/React.createElement(Spinner, Object.assign({
    mr: children ? '1rem' : 0
  }, _spinner)), children, /*#__PURE__*/React.createElement(Complement, Object.assign({}, right)));
});
const ButtonStyle = styled.div.withConfig({
  shouldForwardProp
})`
  ${compose(textBase, flexBase)}
`;

const Tag = /*#__PURE__*/forwardRef(({
  children,
  ...p
}, ref) => {
  const {
    tag
  } = useTheme();
  const m = useMerge(p, typeVariant(tag, 'solid', p), tag.default);
  const [left, right, props] = comp(m);
  return /*#__PURE__*/React.createElement(TagStyle, Object.assign({
    whiteSpace: "nowrap",
    alignItems: 'center',
    userSelect: 'none',
    transition: 'color 300ms, background 300ms, border-color 300ms'
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Complement, Object.assign({}, left)), children, /*#__PURE__*/React.createElement(Complement, Object.assign({}, right)));
});
const TagStyle = styled.div.withConfig({
  shouldForwardProp
})`
  ${compose(flexBase, textBase)}
`;

const Card = /*#__PURE__*/forwardRef(({
  children,
  ...p
}, ref) => {
  var _header$p, _ref5, _footer$p;

  const {
    card
  } = useTheme();
  const type = typeVariant(card, 'elevated', p);
  const {
    _header,
    header,
    _tag,
    tag,
    _title,
    title,
    _media,
    media,
    _body,
    body,
    _footer,
    footer,
    innerPadding,
    ...props
  } = useMerge(p, type, card.default);

  const getPadding = target => {
    var _ref, _ref2, _ref3, _ref4, _target$padding, _target, _target2, _target3;

    return (_ref = (_ref2 = (_ref3 = (_ref4 = (_target$padding = (_target = target(p)) === null || _target === void 0 ? void 0 : _target.padding) !== null && _target$padding !== void 0 ? _target$padding : p.innerPadding) !== null && _ref4 !== void 0 ? _ref4 : (_target2 = target(type)) === null || _target2 === void 0 ? void 0 : _target2.padding) !== null && _ref3 !== void 0 ? _ref3 : type.innerPadding) !== null && _ref2 !== void 0 ? _ref2 : (_target3 = target(card.default)) === null || _target3 === void 0 ? void 0 : _target3.padding) !== null && _ref !== void 0 ? _ref : card.default.innerPadding;
  };

  return /*#__PURE__*/React.createElement(Flex, Object.assign({
    role: "group",
    width: '100%',
    position: 'relative',
    flexDirection: 'column'
  }, props, {
    ref: ref
  }), (header || title) && /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Flex, Object.assign({
    order: 1
  }, _header, {
    padding: getPadding(x => x._header)
  }), /*#__PURE__*/React.createElement(Flex, {
    flexGrow: 1
  }, header ? renderComponent(header) : /*#__PURE__*/React.createElement(Text, Object.assign({
    fontSize: '2rem',
    lineHeight: '3rem'
  }, _title), renderComponent(title))))), tag && /*#__PURE__*/React.createElement(Tag, Object.assign({
    position: "absolute",
    top: "0",
    right: "0",
    alignSelf: "center",
    m: (_header$p = _header.p) !== null && _header$p !== void 0 ? _header$p : _header.padding
  }, _tag), renderComponent(tag)), media && /*#__PURE__*/React.createElement(Flex, Object.assign({
    order: 2
  }, _media), renderComponent(media)), body && /*#__PURE__*/React.createElement(Flex, Object.assign({
    order: 3
  }, _body, {
    padding: getPadding(x => x._body)
  }), renderComponent(body)), children && /*#__PURE__*/React.createElement(Flex, Object.assign({
    order: 3
  }, _body, {
    padding: getPadding(x => x._body)
  }), children), footer && /*#__PURE__*/React.createElement(Flex, Object.assign({
    order: 4
  }, _footer, {
    padding: (_ref5 = (_footer$p = _footer.p) !== null && _footer$p !== void 0 ? _footer$p : _footer.padding) !== null && _ref5 !== void 0 ? _ref5 : innerPadding
  }), renderComponent(footer)));
});

/* eslint-disable max-len */
const CloseIcon = () => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "8",
  height: "8",
  viewBox: "0 0 8 8"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#1E1E1E",
  fillRule: "evenodd",
  d: "M0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L1.70710678,0.292893219 L4,2.585 L6.29289322,0.292893219 C6.65337718,-0.0675907428 7.22060824,-0.0953202783 7.61289944,0.209704612 L7.70710678,0.292893219 C8.09763107,0.683417511 8.09763107,1.31658249 7.70710678,1.70710678 L7.70710678,1.70710678 L5.415,4 L7.70710678,6.29289322 C8.06759074,6.65337718 8.09532028,7.22060824 7.79029539,7.61289944 L7.70710678,7.70710678 C7.31658249,8.09763107 6.68341751,8.09763107 6.29289322,7.70710678 L6.29289322,7.70710678 L4,5.415 L1.70710678,7.70710678 C1.34662282,8.06759074 0.779391764,8.09532028 0.387100557,7.79029539 L0.292893219,7.70710678 C-0.0976310729,7.31658249 -0.0976310729,6.68341751 0.292893219,6.29289322 L0.292893219,6.29289322 L2.585,4 L0.292893219,1.70710678 C-0.0675907428,1.34662282 -0.0953202783,0.779391764 0.209704612,0.387100557 Z"
}));

const CloseControl = /*#__PURE__*/forwardRef((p, ref) => {
  const {
    closeControl
  } = useTheme();
  const {
    _icon,
    ...props
  } = useMerge(p, sizeVariant(closeControl, 'md', p), closeControl.default);
  return /*#__PURE__*/React.createElement(CloseButtonStyle, Object.assign({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Icon, Object.assign({
    svg: /*#__PURE__*/React.createElement(CloseIcon, null)
  }, _icon)));
});
const CloseButtonStyle = styled.div.withConfig({
  shouldForwardProp
})`
  ${composedFlexBase}
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Container = /*#__PURE__*/forwardRef((p, ref) => {
  const {
    container
  } = useTheme();
  const props = useMerge(p, typeVariant(container, 'normal', p), container.default);
  return /*#__PURE__*/React.createElement(Flex, Object.assign({}, props, {
    ref: ref
  }));
});

const Link = /*#__PURE__*/forwardRef((p, ref) => {
  const {
    link
  } = useTheme();
  const props = useMerge(p, typeVariant(link, 'simple', p), link.default);
  return /*#__PURE__*/React.createElement(LinkStyle, Object.assign({}, props, {
    ref: ref
  }));
});
const LinkStyle = styled.a.withConfig({
  shouldForwardProp
})`
  ${composedTextBase}

  cursor: pointer;
  & * {
    cursor: pointer;
  }
`;

const List = /*#__PURE__*/forwardRef((p, ref) => {
  var _ref, _p$v;

  const {
    list
  } = useTheme();
  const type = (_ref = (_p$v = p.v) !== null && _p$v !== void 0 ? _p$v : p.variant) !== null && _ref !== void 0 ? _ref : 'unordered';
  const props = useMerge(p, typeVariant(list, 'unordered', p), list.default);
  return /*#__PURE__*/React.createElement(ListStyle, Object.assign({
    as: type === 'unordered' ? 'ul' : 'ol'
  }, props, {
    ref: ref
  }));
});
List.displayName = 'List';
const listSystem = system({
  counterReset: true
});
const itemSystem = system({
  paddingLeft: true,
  marginBottom: true,
  color: true,
  fontSize: true,
  lineHeight: true,
  counterIncrement: true
});
const bulletSystem = system({
  content: true,
  position: true,
  color: true,
  marginRight: true,
  width: true,
  fontSize: true,
  lineHeight: true
});
const ListStyle = styled.ul.withConfig({
  shouldForwardProp
})`
  ${composedTextBase}

  list-style-type: none;

  & li {
    display: flex;

    ${p => itemSystem(polyfillTheme(p._items, p.theme))}

    &:before {
      ${p => bulletSystem(polyfillTheme(p._bullet, p.theme))}
    }
  }

  & li:last-child {
    margin-bottom: 0;
  }

  ${listSystem}
`;

const ListItem = p => {
  const [comp, {
    children,
    ...props
  }] = sideComp(p);
  return /*#__PURE__*/React.createElement(ListItemStyle, Object.assign({
    alignItems: "flex-start"
  }, props), /*#__PURE__*/React.createElement(Complement, Object.assign({}, comp)), /*#__PURE__*/React.createElement("span", null, children));
};

const ListItemStyle = styled.li.withConfig({
  shouldForwardProp
})`
  ${compose(flexBase, textBase)}
`;

const Typography = /*#__PURE__*/forwardRef(({
  as: _as,
  ...p
}, ref) => {
  var _ref, _p$variant;

  const {
    typography
  } = useTheme();
  const type = (_ref = (_p$variant = p.variant) !== null && _p$variant !== void 0 ? _p$variant : p.v) !== null && _ref !== void 0 ? _ref : 'p';
  const as = _as !== null && _as !== void 0 ? _as : type === 'lead' ? 'p' : type;
  const props = useMerge(p, typeVariant(typography, 'p', p), typography.default);
  return /*#__PURE__*/React.createElement(TypographyStyle, Object.assign({}, props, {
    as: as,
    ref: ref
  }));
});
const TypographyStyle = styled.p.withConfig({
  shouldForwardProp
})`
  ${composedTextBase}
`;

const ModalContext = /*#__PURE__*/createContext({
  push: () => {},
  replace: () => {},
  pop: () => {},
  go: () => {},
  back: () => {},
  forward: () => {}
});
const useModal = (modal, defaultProps) => {
  const history = useContext(ModalContext);
  return [props => modal ? history.push(modal, { ...defaultProps,
    ...props
  }) : history.pop(), history.pop, history];
};
const useModalHistory = () => useContext(ModalContext);
const ModalInstanceContext = /*#__PURE__*/createContext({
  hide: false
});

const Modal = ({
  children,
  onClose,
  ...p
}) => {
  const {
    modal
  } = useTheme();
  const {
    hide
  } = useContext(ModalInstanceContext);
  const {
    pop
  } = useContext(ModalContext);
  const {
    title,
    _title,
    header,
    _header,
    _close,
    _overlay,
    ...props
  } = useMerge(p, sizeVariant(modal, 'md', p), modal.default);
  return /*#__PURE__*/React.createElement(InsetBox, Object.assign({
    horizontalPosition: "stretch",
    verticalPosition: "stretch",
    position: "fixed",
    display: hide ? 'none' : 'flex',
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3
  }, _overlay), /*#__PURE__*/React.createElement(Flex, Object.assign({
    flexDirection: "column",
    position: "relative"
  }, props), /*#__PURE__*/React.createElement(Box, {
    onClick: onClose !== null && onClose !== void 0 ? onClose : pop
  }, /*#__PURE__*/React.createElement(CloseControl, Object.assign({}, _close))), (header || title) && /*#__PURE__*/React.createElement(Flex, Object.assign({
    mb: "2rem"
  }, _header), header ? renderComponent(header) : /*#__PURE__*/React.createElement(Typography, Object.assign({
    v: "h3",
    as: "div"
  }, _title), renderComponent(title))), children));
};

const ModalProvider = ({
  children
}) => {
  const [{
    position,
    queue
  }, setState] = useState({
    position: -1,
    queue: []
  });
  const context = {
    push: (m, props) => {
      setState(s => ({
        position: s.position + 1,
        queue: [...s.queue, [m, props]]
      }));
    },
    replace: (m, props) => {
      setState(s => ({
        position: s.position + 1,
        queue: [...s.queue.slice(0, -1), [m, props]]
      }));
    },
    pop: () => {
      setState(s => ({
        position: s.position - 1,
        queue: [...s.queue.slice(0, -1)]
      }));
    },
    go: n => setState(s => ({
      position: s.position + n,
      queue: s.queue
    })),
    back: () => setState(s => ({
      position: s.position - 1,
      queue: s.queue
    })),
    forward: () => setState(s => ({
      position: s.position + 1,
      queue: s.queue
    }))
  };
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: context
  }, children, position !== -1 && queue.map(([m, props], i) => /*#__PURE__*/React.createElement(ModalInstanceContext.Provider, {
    key: i,
    value: {
      hide: i !== position
    }
  }, /*#__PURE__*/createElement(m, props))));
};

const makeAlias = v => /*#__PURE__*/forwardRef((p, ref) => /*#__PURE__*/React.createElement(Text, Object.assign({
  v: v
}, p, {
  ref: ref
})));
const Em = makeAlias('em');
const Strong = makeAlias('strong');
const Underline = makeAlias('underline');
const Abbr = makeAlias('abbr');
const Strikethrough = makeAlias('strikethrough');
const Sub = makeAlias('sub');
const Sup = makeAlias('sup');

const makeAlias$1 = v => /*#__PURE__*/forwardRef((p, ref) => /*#__PURE__*/React.createElement(Typography, Object.assign({
  v: v
}, p, {
  ref: ref
})));

const Heading1 = makeAlias$1('h1');
const Heading2 = makeAlias$1('h2');
const Heading3 = makeAlias$1('h3');
const Heading4 = makeAlias$1('h4');
const Heading5 = makeAlias$1('h5');
const Heading6 = makeAlias$1('h6');
const Paragraph = makeAlias$1('p');
const Lead = makeAlias$1('lead');

const XcoreGlobal = () => {
  const {
    global
  } = useTheme();
  return /*#__PURE__*/React.createElement(GlobalStyle, Object.assign({}, global));
};
const base$1 = compose(globalBase);
const GlobalStyle = createGlobalStyle`
  html {
    ${p => base$1({ ...p._html,
  theme: p.theme
})}
  }

  body {
    ${p => base$1({ ...p._body,
  theme: p.theme
})}
  }

  *, *:before, *:after {
    ${p => base$1({ ...p._all,
  theme: p.theme
})}
  }

  ::-moz-selection {
    ${p => selectionBase({ ...p._selection,
  theme: p.theme
})}
  }

  ::selection {
    ${p => selectionBase({ ...p._selection,
  theme: p.theme
})}
  }
`;

const XcoreProvider = ({
  children,
  theme,
  disableGlobalStyles
}) => {
  return theme !== null ? /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme !== null && theme !== void 0 ? theme : emptyTheme
  }, !disableGlobalStyles && /*#__PURE__*/React.createElement(XcoreGlobal, null), /*#__PURE__*/React.createElement(ModalProvider, null, children)) : /*#__PURE__*/React.createElement(ModalProvider, null, children);
};

const useDisclosure = (initialState = false) => {
  const [isOpen, setState] = useState(initialState);

  const open = () => setState(true);

  const close = () => setState(false);

  const toggle = () => setState(!isOpen);

  return {
    isOpen,
    open,
    close,
    toggle
  };
};

export { Abbr, ActiveBreakpoint, AspectRatio, Box, Button, Card, Cell, CloseControl, Collapse, Container, Em, Flex, Grid, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Icon, Img, InsetBox, Lead, Link, List, ListItem, LoremIpsum, Modal, ModalContext, ModalProvider, OutsetBox, Paragraph, SimpleGrid, Spinner, Stack, Strikethrough, Strong, Sub, Sup, Tag, Text, Typography, Underline, XcoreGlobal, XcoreProvider, adjustHue, breakpoints, button, card, closeControl, colors, container, createScales, createTheme, darkColorTheme, darken, desaturate, fonts, global, lightColorTheme, lighten, link, list, modal, opacify, saturate, shade, tag, text, tint, transparentize, typography, useDisclosure, useModal, useModalHistory, useTheme };
//# sourceMappingURL=index.es.js.map
