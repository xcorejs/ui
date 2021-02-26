// Import components from /theme to prevent circular references in Storybook
import { CardTheme, cardTheme } from 'components/Card/theme';
import { TagTheme, tagTheme } from 'components/Tag/theme';


export const xcoreSymbol = Symbol("xcore theme symbol");

export type XcoreTheme = {
  card: CardTheme;
  tag: TagTheme;
}

export const createTheme = (theme: Partial<XcoreTheme> = {}): XcoreTheme => ({
  ...cardTheme(),
  ...tagTheme(),
  ...theme
});

export const emptyTheme = createTheme();
