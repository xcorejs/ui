import useTheme from './useTheme';
import { XcoreTheme } from '../theme';

export const useComponentTheme = <
  K extends keyof XcoreTheme,
  V extends keyof XcoreTheme[K]["variants"],
  S extends keyof XcoreTheme[K]["sizes"]
>(key: K, v?: V, s?: S): XcoreTheme[K]["baseStyle"] => {
  const root = useTheme();

  const theme = root[key];

  return {
    ...theme.baseStyle,
    ...v ?? theme.defaultProps.v ? (theme.variants as any)[v ?? theme.defaultProps.v] : undefined,
    ...s ?? theme.defaultProps.s ? (theme.sizes as any)[s ?? theme.defaultProps.s] : undefined
  }
};
