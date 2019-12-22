import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { defaultTheme, XcoreTheme } from './theme';

const useTheme = () => {
  const theme = useContext<XcoreTheme>(ThemeContext);

  return theme || defaultTheme;
};

export default useTheme;
