import { Config } from '@styled-system/core';

export const flexConfig: Config = {
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
  order: true,
  // aliases
  direction: {
    property: 'flexDirection'
  },
  align: {
    property: 'alignItems'
  },
  justify: {
    property: 'justifyContent'
  },
  wrap: {
    property: 'flexWrap'
  }
};
