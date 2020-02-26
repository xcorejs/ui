import React, { FC } from 'react';
import Icon, { IconProps } from './Icon';
import renderComponent, { Renderable } from '../utils/renderComponent';

export type SideComplementProps = {
  _icon?: IconProps;
  icon?: Renderable;
  element?: Renderable;
};

export type ComplementProps = {
  _leftIcon?: IconProps;
  leftIcon?: Renderable;
  leftElement?: Renderable;

  _rightIcon?: IconProps;
  rightIcon?: Renderable;
  rightElement?: Renderable;
};

export const sideComp = <T extends SideComplementProps>({
  _icon,
  icon,
  element,
  ...props
}: T): [ComplementSideProps, Omit<T, keyof SideComplementProps>] =>
  [{ _icon, icon, element }, props];

export const comp = <T extends ComplementProps>({
  _rightIcon,
  rightIcon,
  rightElement,
  _leftIcon,
  leftIcon,
  leftElement,
  ...props
}: T): [ComplementSideProps, ComplementSideProps, Omit<T, keyof ComplementProps>] =>
  [
    {
      _icon: _leftIcon,
      icon: leftIcon,
      element: leftElement
    },
    {
      _icon: _rightIcon,
      icon: rightIcon,
      element: rightElement
    },
    props
  ];

interface ComplementSideProps {
  _icon?: IconProps;
  icon?: Renderable;
  element?: Renderable;
}

const Complement: FC<ComplementSideProps> = ({ _icon, icon, element }) => (
  <>
    {renderComponent(element)}
    {icon && <Icon mr="1rem" svg={icon} {..._icon} />}
  </>
);

export default Complement;
