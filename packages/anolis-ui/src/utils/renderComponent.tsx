import { ComponentType, createElement, ReactNode } from "react";
import { isValidElementType } from "react-is";

export type Renderable = ReactNode | ComponentType;

const renderComponent = (C: Renderable): ReactNode =>
  typeof C !== "string" && isValidElementType(C)
    ? <C />
    : C;

export default renderComponent;
