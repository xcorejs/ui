import { get, Config, ConfigStyle, Scale } from '@styled-system/core';
import CSS from 'csstype';

const defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const isNumber = (n: any): n is number => typeof n === 'number' && !isNaN(n);

const getMargin = (n: any, scale?: Scale) => {
  if (!isNumber(n)) {
    return get(scale, n, n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(scale, absolute, absolute);
  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }
  return value * (isNegative ? -1 : 1);
};

const getMarginConfig = (property: keyof CSS.Properties): ConfigStyle => ({
  property,
  scale: 'space',
  transform: getMargin,
  defaultScale
});

const getPaddingConfig = (property: keyof CSS.Properties): ConfigStyle => ({
  property,
  scale: 'space',
  defaultScale
});

export const spaceConfig: Config = {
  margin: getMarginConfig('margin'),
  marginTop: getMarginConfig('marginTop'),
  marginRight: getMarginConfig('marginRight'),
  marginBottom: getMarginConfig('marginBottom'),
  marginLeft: getMarginConfig('marginLeft'),
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale
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
    defaultScale
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale
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
