import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { XcoreTheme, emptyTheme } from 'theme';
import ModalProvider from 'components/Modal/ModalProvider';
import XcoreGlobal from 'components/XcoreGlobal';

export type XcoreProviderProps = {
  theme?: XcoreTheme | null;
  disableGlobalStyles?: boolean;
};

const XcoreProvider: FC<XcoreProviderProps> = ({ children, theme, disableGlobalStyles }) => {
  return theme !== null
    ? (
      <ThemeProvider theme={theme ?? emptyTheme}>
        {!disableGlobalStyles && <XcoreGlobal />}
        <ModalProvider>{children}</ModalProvider>
      </ThemeProvider>
    )
    : <ModalProvider>{children}</ModalProvider>;
};

export default XcoreProvider;
