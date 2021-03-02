import { PseudoProp } from "utils/PseudoProp";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";

export type ControlSizes = "xs" | "sm" | "md" | "lg";

export interface ControlThemeProps extends PseudoProp {
  _icon?: PseudoProp;
}

export type ControlTheme = ComponentTheme<ControlThemeProps, never, ControlSizes>;

export const controlTheme = (c?: PartialComponentTheme<ControlTheme>): { control: ControlTheme } => ({
  control: extendTheme(emptyControl, c)
});

const emptyControl: ControlTheme = {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    role: "group",
    w: "100%",
    position: "relative",
    flexDirection: "column",
    color: "text",
    background: "white",
    maxWidth: "30rem"
  },
  sizes: {
    xs: {},
    sm: {},
    md: {},
    lg: {}
  },
  variants: {},
  defaultProps: {
    s: "md"
  }
};
