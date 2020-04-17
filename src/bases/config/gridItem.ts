import { Config } from '@styled-system/core';

export const gridItemConfig: Config = {
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
