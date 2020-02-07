import { createTheme, global, XcoreGlobal } from 'index';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export default { title: 'Global' };

const theme = createTheme({
  ...global({
    _html: {
      background: 'green'
    },
    _selection: {
      bg: 'red'
    }
  })
});

export const BasicUsage: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <XcoreGlobal />
      Text to select
    </ThemeProvider>
  );
};
