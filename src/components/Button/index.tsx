import React, { AnchorHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import * as system from 'styled-system';
import * as CSS from 'csstype';

import useTheme from '../../useTheme';
import { ButtonSize, ButtonType } from './theme';
import Spinner, { SpinnerProps } from '../Spinner';
import Complement, { comp, ComplementProps } from '../Complement';
import { typeVariant, sizeVariant } from '../../utils/variant';
import { defaults } from '../../utils/defaults';
import { compose } from '../../utils/baseStyle';
import { FlexBaseProps, TextBaseProps, textBase, flexBase } from '../../bases';

export type ButtonProps =
  {
    _spinner?: SpinnerProps;
    textTransform?: system.ResponsiveValue<CSS.TextTransformProperty>;
  }
  & ComplementProps
  & FlexBaseProps
  & TextBaseProps;

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

const Button = forwardRef<HTMLDivElement, ExtendedButtonProps>((
  {
    loading,
    as = 'button',
    children,
    ...p
  },
  ref
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
    <ButtonStyle role="group" as={as} {...props} ref={ref}>
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
});

export default Button;

const ButtonStyle = styled.div<ButtonProps>`
  ${compose(textBase, flexBase)}
`;
