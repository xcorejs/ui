import { FC } from "react";
import { defaultTheme, Preflight, ThemeProvider } from "@xstyled/styled-components";

import { XcoreTheme, emptyTheme } from "theme";
// import ModalProvider from 'components/Modal/ModalProvider';
import { useMemo } from "react";

export type XcoreProviderProps = {
  theme?: XcoreTheme | null;
  xstyledTheme?: {};

  noPreflight?: boolean;
};

const XcoreProvider: FC<XcoreProviderProps> = ({ children, theme, xstyledTheme, noPreflight }) => {
  const mergedTheme = useMemo<any>(() => ({
    ...defaultTheme,
    ...xstyledTheme,
    colors: {
      ...defaultTheme.colors,
      "xcore-blue": "#0171b6"
    },
    xcore: theme ?? emptyTheme
  }), [theme, xstyledTheme]);

  return (
    <>
      {!noPreflight && <Preflight />}
      {theme !== null
        ? (
          <ThemeProvider theme={mergedTheme}>
            <>{children}</>
          </ThemeProvider>
        )
        : <>{children}</>}
    </>
  );
};

export default XcoreProvider;
