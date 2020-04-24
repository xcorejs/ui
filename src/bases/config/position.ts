import { Config } from '@styled-system/core';

const defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export const positionConfig: Config = {
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
