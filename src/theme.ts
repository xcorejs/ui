import { Theme } from 'styled-system';

import { container, ContainerTheme } from './components/Container/theme';
import { text, TextTheme } from './components/Text/theme';

interface XcoreThemeBase extends Theme {
  name: string;
}

export type XcoreTheme =
  & XcoreThemeBase
  & ContainerTheme
  & BreakpointsTheme
  & TextTheme;

export const createTheme = (theme: Partial<XcoreTheme>): XcoreTheme => ({
  name: 'Xcore',
  ...breakpoints(),
  ...container(),
  ...text(),
  ...theme
});

export type Breakpoints = string[] & Record<string, string> & { aliases: string[] }

export interface BreakpointsTheme {
  breakpoints: Breakpoints;
}


export const breakpoints = (
  breakpoints: string[] = [],
  aliases: string[] = ['xs', 'sm', 'md', 'lg', 'xl']
): BreakpointsTheme => {
  const br = aliases.reduce((acc, val, i) => {
    // @ts-ignore
    acc[val] = breakpoints[i];
    return acc;
  }, [ ...breakpoints ]);
  //@ts-ignore
  br.aliases = aliases;


  return {
    // @ts-ignore
    breakpoints: br
  };
};

export { container } from './components/Container/theme';
