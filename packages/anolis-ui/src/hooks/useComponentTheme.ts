import useTheme from "./useTheme";
import { AnolisTheme } from "../theme";
import { useMemo } from "react";
import { merge } from "utils/merge";

export const useComponentTheme = <
  K extends keyof AnolisTheme,
  V extends keyof AnolisTheme[K]["variants"],
  S extends keyof AnolisTheme[K]["sizes"]
>(key: K, v?: V, s?: S): AnolisTheme[K]["baseStyle"] => {
  const root = useTheme();

  const theme = root[key];

  return useMemo(() => merge(
    theme.baseStyle,
    v ?? theme.defaultProps.v ? (theme.variants as any)[v ?? theme.defaultProps.v] : undefined,
    s ?? theme.defaultProps.s ? (theme.sizes as any)[s ?? theme.defaultProps.s] : undefined
  ), [s, theme.baseStyle, theme.defaultProps.s, theme.defaultProps.v, theme.sizes, theme.variants, v]);
};
