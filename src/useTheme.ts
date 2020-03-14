import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { XcoreTheme, emptyTheme } from './theme';

const useTheme = (): XcoreTheme => {
  const theme = useContext(ThemeContext) as XcoreTheme | undefined;

  return theme ?? emptyTheme;
};

export default useTheme;
