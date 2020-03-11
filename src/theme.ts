import { button, ButtonTheme } from './components/Button/theme';
import { card, CardTheme } from './components/Card/theme';
import { container, ContainerTheme } from './components/Container/theme';
import { link, LinkTheme, LinkType } from './components/Link/theme';
import { list, ListTheme } from './components/List/theme';
import { tag, TagTheme } from './components/Tag/theme';
import { text, TextTheme } from './components/Text/theme';
import { typography, TypographyTheme } from './components/Typography/theme';
import { global, GlobalTheme } from './components/XcoreGlobal/theme';
import { createScales, Scales } from './scales';

export interface XcoreThemeBase {
  name: string;
}

export type XcoreTheme =
  & Scales
  & XcoreThemeBase
  & GlobalTheme
  & ContainerTheme
  & TextTheme
  & ButtonTheme
  & TypographyTheme
  & LinkTheme
  & TagTheme
  & CardTheme
  & ListTheme;

export const createTheme = (theme: Partial<XcoreTheme>): XcoreTheme => ({
  ['__xcoreTheme' as any]: true,
  name: 'Xcore',
  ...global(),
  ...container(),
  ...text(),
  ...button(),
  ...typography(),
  ...link(),
  ...tag(),
  ...card(),
  ...list(),
  ...createScales({}),
  ...theme
});

export { container } from './components/Container/theme';
export { text, TextAs, TextType } from './components/Text/theme';
export { button, ButtonSize, ButtonType, ButtonAs } from './components/Button/theme';
export { global } from './components/XcoreGlobal/theme';
export { typography, TypographyType, TypographyAs } from './components/Typography/theme';
export { link, LinkType, LinkAs } from './components/Link/theme';
export { list, ListType } from './components/List/theme';
export { tag, TagType } from './components/Tag/theme';
export { card, CardType } from './components/Card/theme';
