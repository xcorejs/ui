import { tag, TagTheme } from 'components/Tag';
import { card, CardTheme } from './components/Card/theme';

export const xcoreSymbol = Symbol("xcore theme symbol");

export type XcoreTheme = {
  [xcoreSymbol]: true;
  card: CardTheme;
  tag: TagTheme;
}

export const createTheme = (theme: Partial<XcoreTheme> = {}): XcoreTheme => ({
  [xcoreSymbol]: true,
  ...card(),
  ...tag(),
  ...theme
});

export const emptyTheme = createTheme();
