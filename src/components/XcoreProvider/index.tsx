import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { XcoreTheme, emptyTheme } from 'theme';
import ModalProvider from 'components/Modal/ModalProvider';

export type XcoreProviderProps = {
  theme?: XcoreTheme | null;
};

const XcoreProvider: FC<XcoreProviderProps> = ({ children, theme }) => {
  return theme !== null
    ? (
      <ThemeProvider theme={theme ?? emptyTheme}>
        <ModalProvider>{children}</ModalProvider>
      </ThemeProvider>
    )
    : <ModalProvider>{children}</ModalProvider>;
};

export default XcoreProvider;
