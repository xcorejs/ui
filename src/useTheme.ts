import { useContext } from 'react';
import { ThemeContext } from '@xstyled/styled-components';

import { XcoreTheme, emptyTheme } from './theme';

export const useTheme = (): XcoreTheme => {
  const theme = useContext(ThemeContext) as XcoreTheme | undefined;

  return theme ?? emptyTheme;
};

export default useTheme;
