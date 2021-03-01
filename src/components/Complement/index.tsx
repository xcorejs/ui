import { Icon, IconProps } from "components/Icon";
import { FC } from "react";
import renderComponent, { Renderable } from "utils/renderComponent";

export type SideComplementThemeProps = {
  _icon?: IconProps;
};

export interface SideComplementProps extends SideComplementThemeProps {
  icon?: Renderable;
  element?: Renderable;
}

export type ComplementThemeProps = {
  _leftIcon?: IconProps;
  _rightIcon?: IconProps;
};

export interface ComplementProps extends ComplementThemeProps {
  leftIcon?: Renderable;
  leftElement?: Renderable;
  rightIcon?: Renderable;
  rightElement?: Renderable;
}

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
