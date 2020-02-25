import React, { AnchorHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import * as system from 'styled-system';
import * as CSS from 'csstype';

import useTheme from '../../useTheme';
import { FlexProps, flexBase } from '../Flex';
import { ButtonSize, ButtonType } from './theme';
import Spinner, { SpinnerProps } from '../Spinner';
import Complement, { comp, ComplementProps } from '../Complement';
import { TextProps, textBase } from '../Text/index';
import { typeVariant, sizeVariant } from '../../utils/variant';
import { defaults } from '../../utils/defaults';

export type ButtonProps =
  {
    _spinner?: SpinnerProps;
    textTransform?: system.ResponsiveValue<CSS.TextTransformProperty>;
  }
  & ComplementProps
  & FlexProps
  & TextProps;

export type ExtendedButtonProps =
  & ButtonProps
  & {
    loading?: boolean;
    disabled?: boolean;

    size?: ButtonSize;
    s?: ButtonSize;
    type?: ButtonType;
    t?: ButtonType;
  }
  & ({ as?: 'button' | 'div' } | ({ as: 'a' } & AnchorHTMLAttributes<unknown>));

const Button: FC<ExtendedButtonProps> = (
  {
    loading,
    as = 'button',
    children,
    ...p
  }
) => {
  const { button } = useTheme();

  const [left, right, { _spinner, ...props }] = comp(
    defaults(
      p,
      typeVariant(button, 'solid', p),
      sizeVariant(button, 'md', p),
      button.default
    )
  );

  return (
    <ButtonStyle role="group" as={as} {...props}>
      <Complement {...left} />

      {loading && (
        <Spinner
          mr={children ? '1rem' : 0}
          {..._spinner}
        />
      )}

      {children}

      <Complement {...right} />
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.div<ButtonProps>`
  ${p => flexBase(p)}
  ${p => textBase(p)}
`;
