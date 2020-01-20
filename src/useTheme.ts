import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { defaultTheme, XcoreTheme } from './theme';

const useTheme = (): XcoreTheme => {
  const theme = useContext<XcoreTheme>(ThemeContext);

  return theme || defaultTheme;
};

export default useTheme;
