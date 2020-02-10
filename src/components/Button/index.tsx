import React, { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';
import * as system from 'styled-system';
import * as CSS from 'csstype';

import useTheme from '../../useTheme';
import Flex, { FlexProps } from '../Flex';
import Icon, { IconProps } from '../Icon';
import { ButtonSize, ButtonType } from './theme';
import Spinner, { SpinnerProps } from '../Spinner';

export type ButtonProps =
  {
    _spinner?: SpinnerProps;
    _leftIcon?: IconProps;
    _rightIcon?: IconProps;
    textTransform?: system.ResponsiveValue<CSS.TextTransformProperty>;
  }
  & FlexProps
  & system.TypographyProps;

const ButtonStyle = styled(Flex)<system.TypographyProps>`
  cursor: pointer;
  text-decoration: none;

  &:disabled {
    cursor: not-allowed;
  }
  ${system.system({
    textTransform: true
  })}

  ${system.typography}
  ${system.borderRadius}
  ${system.lineHeight}
`;

ButtonStyle.defaultProps = {
  display: 'inline-flex',
  bg: 'transparent',
  border: '0.1rem solid transparent',
  transition: 'background 300ms, color 300ms, border 300ms, box-shadow 300ms'
};

export interface ButtonPropsWithIcons extends ButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;

  size?: ButtonSize;
  s?: ButtonSize;
  type?: ButtonType;
  t?: ButtonType;
}

export type ExtendedButtonProps =
  & ButtonPropsWithIcons
  & ({ as?: 'button' | 'div' } | ({ as: 'a' } & AnchorHTMLAttributes<unknown>));

const Button: FC<ExtendedButtonProps> = (
  {
    leftIcon,
    rightIcon,
    loading,
    size: _size,
    s: _s,
    type: _type,
    t: _t,
    as,
    children,
    ...props
  }
) => {
  const size = _size || _s || 'md';
  const type = _type || _t || 'solid';
  const { button: { default: _default, sizes, types } } = useTheme();

  const { _spinner: _themeSpinner, _leftIcon: _themeLeftIcon, _rightIcon: _themeRightIcon, ...themeButton } = _default;
  const { _spinner: _sizeSpinner, _leftIcon: _sizeLeftIcon, _rightIcon: _sizeRightIcon, ...sizeButton } = sizes[size];
  const { _spinner: _typeSpinner, _leftIcon: _typeLeftIcon, _rightIcon: _typeRightIcon, ...typeButton } = types[type];
  const { _spinner, _leftIcon, _rightIcon, ...button } = props;

  return (
    <ButtonStyle as={as || 'button'} alignItems="center" {...themeButton} {...sizeButton} {...typeButton} {...button}>
      {leftIcon && !loading &&
        <Icon mr="1rem" svg={leftIcon} {..._leftIcon} />
      }
      {loading &&
        <Spinner mr={children ? '1rem' : 0} {..._spinner} />
      }
      {children}
      {rightIcon && !loading &&
        <Icon ml="1rem" svg={rightIcon} {..._rightIcon} />
      }
    </ButtonStyle>
  );
};

export default Button;
