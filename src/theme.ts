import { button, ButtonTheme } from './components/Button/theme';
import { container, ContainerTheme } from './components/Container/theme';
import { text, TextTheme } from './components/Text/theme';
import { global, GlobalTheme } from './components/XcoreGlobal/theme';

interface XcoreThemeBase {
  name: string;
}

export type XcoreTheme =
  & BreakpointsTheme
  & XcoreThemeBase
  & GlobalTheme
  & ContainerTheme
  & TextTheme
  & ButtonTheme;

export const createTheme = (theme: Partial<XcoreTheme>): XcoreTheme => ({
  name: 'Xcore',
  ...breakpoints(),
  ...global(),
  ...container(),
  ...text(),
  ...button(),
  ...theme
});

export type Breakpoints = string[] & Record<string, string> & { aliases: string[] }

export interface BreakpointsTheme {
  breakpoints: Breakpoints;
}

export const breakpoints = (
  _breakpoints: string[] = [],
  aliases: string[] = ['xs', 'sm', 'md', 'lg', 'xl']
): BreakpointsTheme => {
  const br = aliases.reduce((acc, val, i) => {
    // @ts-ignore
    acc[val] = _breakpoints[i];
    return acc;
  }, [..._breakpoints]);
  // @ts-ignore
  br.aliases = aliases;

  return {
    // @ts-ignore
    breakpoints: br
  };
};

export { container } from './components/Container/theme';
export { text } from './components/Text/theme';
export { button } from './components/Button/theme';
export { global } from './components/XcoreGlobal/theme';
