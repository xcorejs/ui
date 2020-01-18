import { ContainerTheme } from './components/Container/theme';

interface XcoreThemeBase {
  name: string;
  breakpoints?: any;
}

export type XcoreTheme = XcoreThemeBase & Partial<ContainerTheme & BreakpointsTheme<string>>;

export const defaultTheme: XcoreTheme = {
  name: 'Xcore'
};

export interface BreakpointsTheme<T extends string> {
  breakpoints: Record<number | T, string>;
}


export const breakpoints = <T extends string>(
  breakpoints: string[],
  aliases?: T[]
): BreakpointsTheme<T> => {
  const a = (aliases || ['xs', 'sm', 'md', 'lg', 'xl']) as string[];
  const br = a.reduce((acc, val, i) => {
    // @ts-ignore
    acc[val] = breakpoints[i];
    return acc;
  }, [ ...breakpoints ]);


  return {
    // @ts-ignore
    breakpoints: br
  };
};

export { container } from './components/Container/theme';
