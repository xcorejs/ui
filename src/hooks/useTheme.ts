import { useContext } from "react";
import { ThemeContext } from "@xstyled/emotion";

import { AnolisTheme, emptyTheme } from "../theme";

export const useTheme = (): AnolisTheme => {
  const theme: { anolis: AnolisTheme } | undefined = useContext<any>(ThemeContext);

  return theme ? theme.anolis ?? emptyTheme : emptyTheme;
};

export default useTheme;
