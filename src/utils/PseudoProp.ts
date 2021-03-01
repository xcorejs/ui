import { StyledComponentProps } from "styled-components";
import { SystemProps } from "@xstyled/styled-components";

export type PseudoProp<C extends string | React.ComponentType<any> = "div"> =
  Omit<StyledComponentProps<C, {}, SystemProps<Record<string | number, unknown>>, never>, "theme">;
