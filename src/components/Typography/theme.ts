import { PseudoProp } from "utils/PseudoProp";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";

export type TypographyVariant = "normal";
export type TypographySize = never;

export interface TypographyThemeProps {
  _h1?: PseudoProp;
  _h2?: PseudoProp;
  _h3?: PseudoProp;
  _h4?: PseudoProp;
  _h5?: PseudoProp;
  _h6?: PseudoProp;
  _p?: PseudoProp;
  _lead?: PseudoProp;
  _a?: PseudoProp;
}

export type TypographyTheme = ComponentTheme<TypographyThemeProps, TypographyVariant, TypographySize>;

export const typographyTheme = (c?: PartialComponentTheme<TypographyTheme>): { typography: TypographyTheme } => ({
  typography: extendTheme(emptyTypography, c)
});

const emptyTypography: TypographyTheme = {
  baseStyle: {
    fontFamily: "sans"
  },
  sizes: {},
  variants: {
    normal: {
      _h1: {
        fontSize: "4.4rem",
        fontWeight: 500,
        lineHeight: "6.6rem"
      },
      _h2: {
        fontSize: "3.2rem",
        fontWeight: 500,
        lineHeight: "4.8rem"
      },
      _h3: {
        fontSize: "2.4rem",
        fontWeight: 500,
        lineHeight: "3.6rem"
      },
      _h4: {

      },
      _h5: {

      },
      _h6: {

      },
      _p: {
        fontSize: "1rem",
        lineHeight: "2rem"
      },
      _lead: {

      }
    }
  },
  defaultProps: {
    v: "normal"
  }
};
