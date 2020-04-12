import { flexBase, FlexBaseProps, textBase, TextBaseProps } from 'bases';
import Complement, { comp, ComplementProps } from 'components/Complement';
import Spinner, { SpinnerProps } from 'components/Spinner';
import * as CSS from 'csstype';
import React, { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import * as system from 'styled-system';
import { ButtonSize, ButtonVariant } from 'theme';
import useTheme from 'useTheme';
import { compose } from 'utils/baseStyle';
import { merge } from 'utils/merge';
import { sizeVariant, typeVariant } from 'utils/variant';

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
    variant?: ButtonVariant;
    v?: ButtonVariant;

    children?: ReactNode;
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
    merge(
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
