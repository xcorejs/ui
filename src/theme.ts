import { ContainerTheme } from 'components/Container/theme';

interface XCoreThemeBase {
  name: string;
  breakpoints?: any;
}

export type XCoreTheme = XCoreThemeBase & Partial<ContainerTheme>;

export const defaultTheme: XCoreTheme = {
  name: 'default XCore theme'
};

export { container } from 'components/Container/theme';
