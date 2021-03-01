import { ComponentType, ReactNode, createElement } from "react";
import { isValidElementType } from "react-is";

export type Renderable = ReactNode | ComponentType;

const renderComponent = (c: Renderable): ReactNode =>
  typeof c !== "string" && isValidElementType(c)
    ? createElement(c)
    : c;

export default renderComponent;
