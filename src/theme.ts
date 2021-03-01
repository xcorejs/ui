// Import components from /theme to prevent circular references in Storybook
import { CardTheme, cardTheme } from "components/Card/theme";
import { ControlTheme, controlTheme } from "components/Control/theme";
import { TagTheme, tagTheme } from "components/Tag/theme";
import { typographyTheme, TypographyTheme } from "components/Typography/theme";

export const xcoreSymbol = Symbol("xcore theme symbol");

export type XcoreTheme = {
  card: CardTheme;
  tag: TagTheme;
  typography: TypographyTheme;
  control: ControlTheme;
};

export const createTheme = (theme: Partial<XcoreTheme> = {}): XcoreTheme => ({
  ...cardTheme(),
  ...tagTheme(),
  ...typographyTheme(),
  ...controlTheme(),
  ...theme
});

export const emptyTheme = createTheme();
