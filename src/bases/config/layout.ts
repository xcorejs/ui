import { get, Config, Scale } from '@styled-system/core';

const isNumber = (n: any) => typeof n === 'number' && !isNaN(n);
const getWidth = (n: any, scale?: Scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');

export const layoutConfig: Config = {
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
  verticalAlign: true,
  // aliases
  w: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  h: {
    property: 'height',
    scale: 'sizes'
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes'
  }
};
