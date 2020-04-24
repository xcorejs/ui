import { system } from '@styled-system/core';
import { colorTransform } from 'scales/colors';

import { borderConfig } from './config/border';
import { cursorConfig } from './config/cursor';
import { flexConfig } from './config/flex';
import { gridItemConfig } from './config/gridItem';
import { layoutConfig } from './config/layout';
import { positionConfig } from './config/position';
import { shadowConfig } from './config/shadow';
import { spaceConfig } from './config/space';
import { typographyConfig } from './config/typography';
import { visualsConfig } from './config/visuals';

export const selectionSystem = system({
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

export const boxSystem = system({
  ...layoutConfig,
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

export const pseudoBoxSystem = system({
  content: true
});

export const globalSystem = system({
  boxSizing: {
    property: 'boxSizing'
  }
});

export const flexSystem = system({ display: true });

export const textSystem = system({
  textTransform: true,
  WebkitLineClamp: true,
  WebkitBoxOrient: true,
  textOverflow: true,
  whiteSpace: true,
  textDecoration: true,
  wordBreak: true
});

export const pathSystem = system({
  fill: {
    property: 'fill',
    scale: 'colors'
  }
});

export const pathHoverSystem = system({
  fillHover: {
    property: 'fill',
    scale: 'colors'
  }
});
