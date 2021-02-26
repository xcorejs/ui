import { useContext } from "react";
import { ThemeContext } from "@xstyled/styled-components";

import { XcoreTheme, emptyTheme } from "../theme";

export const useTheme = (): XcoreTheme => {
  const theme: { xcore: XcoreTheme } | undefined = useContext<any>(ThemeContext);

  return theme ? theme.xcore ?? emptyTheme : emptyTheme;
};

export default useTheme;
