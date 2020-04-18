import { Config } from '@styled-system/core';

const defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export const gridConfig: Config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale
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
