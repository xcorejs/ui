import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { XcoreTheme, emptyTheme } from '../../theme';
import ModalProvider from '../Modal/ModalProvider';
import XcoreGlobal from '../XcoreGlobal';

export type XcoreProviderProps = {
  theme?: XcoreTheme | null;
  disableGlobalStyles?: boolean;
};

const XcoreProvider: FC<XcoreProviderProps> = ({ children, theme, disableGlobalStyles }) => {
  const result = children;

  return theme !== null ? (
    <ThemeProvider theme={theme ?? emptyTheme}>
      {!disableGlobalStyles && <XcoreGlobal />}
      <ModalProvider>{result}</ModalProvider>
    </ThemeProvider>
  ) : <ModalProvider>{result}</ModalProvider>;
};

export default XcoreProvider;
