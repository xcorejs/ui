import { ComponentType, ReactNode, isValidElement, createElement } from 'react';

export type Renderable = ReactNode | ComponentType;

const renderComponent = (c: Renderable): ReactNode =>
  isValidElement(c)
    ? c
    : createElement(c as ComponentType);

export default renderComponent;
