import { button, ButtonTheme } from './components/Button/theme';
import { card, CardTheme } from './components/Card/theme';
import { container, ContainerTheme } from './components/Container/theme';
import { link, LinkTheme } from './components/Link/theme';
import { list, ListTheme } from './components/List/theme';
import { tag, TagTheme } from './components/Tag/theme';
import { text, TextTheme } from './components/Text/theme';
import { typography, TypographyTheme } from './components/Typography/theme';
import { global, GlobalTheme } from './components/XcoreGlobal/theme';
import { createScales, Scales } from './scales';
import { CloseControlTheme, closeControl } from './components/CloseControl/theme';
import { ModalTheme, modal } from './components/Modal/theme';

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
  & ListTheme
  & CloseControlTheme
  & ModalTheme;

export const createTheme = (theme: Partial<XcoreTheme> = {}): XcoreTheme => ({
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
  ...createScales(),
  ...closeControl(),
  ...modal(),
  ...theme
});

export const emptyTheme = createTheme();

export { container } from './components/Container/theme';
export { text, TextAs, TextVariant } from './components/Text/theme';
export { button, ButtonSize, ButtonVariant, ButtonAs } from './components/Button/theme';
export { global } from './components/XcoreGlobal/theme';
export { typography, TypographyVariant, TypographyAs } from './components/Typography/theme';
export { link, LinkVariant, LinkAs } from './components/Link/theme';
export { list, ListVariant } from './components/List/theme';
export { tag, TagVariant } from './components/Tag/theme';
export { card, CardVariant } from './components/Card/theme';
