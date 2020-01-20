import { ContainerTheme } from './components/Container/theme';

interface XcoreThemeBase {
  name: string;
}

export type XcoreTheme = XcoreThemeBase & Partial<ContainerTheme & BreakpointsTheme>;

export const defaultTheme: XcoreTheme = {
  name: 'Xcore'
};

export type Breakpoints = string[] & Record<string, string> & { aliases: string[] }

export interface BreakpointsTheme {
  breakpoints: Breakpoints;
}


export const breakpoints = (
  breakpoints: string[],
  aliases?: string[]
): BreakpointsTheme => {
  const a = (aliases || ['xs', 'sm', 'md', 'lg', 'xl']) as string[];
  const br = a.reduce((acc, val, i) => {
    // @ts-ignore
    acc[val] = breakpoints[i];
    return acc;
  }, [ ...breakpoints ]);
  //@ts-ignore
  br.aliases = a;


  return {
    // @ts-ignore
    breakpoints: br
  };
};

export { container } from './components/Container/theme';
