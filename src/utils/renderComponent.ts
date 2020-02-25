import { ComponentType, ReactNode, isValidElement, createElement } from 'react';

export type Renderable = ReactNode | ComponentType;

const renderComponent = (c: Renderable): ReactNode =>
  typeof c === 'function' ? createElement(c as ComponentType) : c;

export default renderComponent;
