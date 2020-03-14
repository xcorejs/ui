import { createTheme, global, XcoreProvider } from '../../src';
import React, { FC } from 'react';

export default { title: 'Global' };

const theme = createTheme({
  ...global({
    _html: {
      background: 'navy'
    },
    _selection: {
      bg: 'crimson'
    },
    _all: {
      color: 'white'
    }
  })
});

export const BasicUsage: FC = () => {
  return (
    <XcoreProvider theme={theme}>
      Text to select
    </XcoreProvider>
  );
};
