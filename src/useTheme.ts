import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { XCoreTheme, defaultTheme } from './theme';

const useTheme = () => {
  const theme = useContext<XCoreTheme>(ThemeContext);

  return theme || defaultTheme;
};

export default useTheme;
