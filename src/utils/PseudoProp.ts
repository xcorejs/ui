import { StyledComponentProps } from "styled-components";
import { SystemProps } from "@xstyled/styled-components";

export type PseudoProp<C extends string | React.ComponentType<any> = "div", P = {}> =
  Omit<StyledComponentProps<C, {}, SystemProps<Record<string | number, unknown>> & P, never>, "theme">;
