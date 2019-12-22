import { ContainerTheme } from 'components/Container/theme';

interface XcoreThemeBase {
  name: string;
  breakpoints?: any;
}

export type XcoreTheme = XcoreThemeBase & Partial<ContainerTheme>;

export const defaultTheme: XcoreTheme = {
  name: 'Xcore'
};

export { container } from 'components/Container/theme';
