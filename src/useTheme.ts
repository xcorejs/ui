import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { XcoreTheme, createTheme } from './theme';

const useTheme = (): XcoreTheme => {
  const theme = useContext<XcoreTheme | undefined>(ThemeContext);

  return theme ?? createTheme({});
};

export default useTheme;
