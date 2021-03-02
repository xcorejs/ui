// Import components from /theme to prevent circular references in Storybook
import { CardTheme, cardTheme } from "components/Card/theme";
import { ControlTheme, controlTheme } from "components/Control/theme";
import { ModalTheme, modalTheme } from "components/Modal/theme";
import { TagTheme, tagTheme } from "components/Tag/theme";
import { typographyTheme, TypographyTheme } from "components/Typography/theme";

export type AnolisTheme = {
  card: CardTheme;
  tag: TagTheme;
  typography: TypographyTheme;
  control: ControlTheme;
  modal: ModalTheme;
};

export const createTheme = (theme: Partial<AnolisTheme> = {}): AnolisTheme => ({
  ...cardTheme(),
  ...tagTheme(),
  ...typographyTheme(),
  ...controlTheme(),
  ...modalTheme(),
  ...theme
});

export const emptyTheme = createTheme();
