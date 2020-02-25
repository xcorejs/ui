import React, { FC, ComponentType, createElement } from 'react';
import Icon, { IconProps } from './Icon';

export type SideComplementProps = {
  _icon?: IconProps;
  icon?: ComponentType;
  element?: ComponentType;
};

export type ComplementProps = {
  _leftIcon?: IconProps;
  leftIcon?: ComponentType;
  leftElement?: ComponentType;

  _rightIcon?: IconProps;
  rightIcon?: ComponentType;
  rightElement?: ComponentType;
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
  icon?: ComponentType;
  element?: ComponentType;
}

const Complement: FC<ComplementSideProps> = ({ _icon, icon, element }) => (
  <>
    {element && createElement(element)}
    {icon && <Icon mr="1rem" svg={icon} {..._icon} />}
  </>
);

export default Complement;
