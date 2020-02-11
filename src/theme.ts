import { button, ButtonTheme } from './components/Button/theme';
import { container, ContainerTheme } from './components/Container/theme';
import { text, TextTheme } from './components/Text/theme';
import { typography, TypographyTheme } from './components/Typography/theme';
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
  & ButtonTheme
  & TypographyTheme;

export const createTheme = (theme: Partial<XcoreTheme>): XcoreTheme => ({
  name: 'Xcore',
  ...breakpoints(),
  ...global(),
  ...container(),
  ...text(),
  ...button(),
  ...typography(),
  ...theme
});

export type Breakpoints = string[] & Record<string, string> & { aliases: string[] }

export interface BreakpointsTheme {
  breakpoints: Breakpoints;
}

export const breakpoints = (
  _breakpoints: string[] = ['30em', '48em', '64em', '78em', '85em'],
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
export { text, TextAs, TextType } from './components/Text/theme';
export { button, ButtonSize, ButtonType, ButtonAs } from './components/Button/theme';
export { global } from './components/XcoreGlobal/theme';
export { typography, TypographyType, TypographyAs } from './components/Typography/theme';
