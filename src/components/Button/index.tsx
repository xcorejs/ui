import { flexBase, FlexBaseProps, textBase, TextBaseProps } from 'bases';
import Complement, { comp, ComplementProps } from 'components/Complement';
import Spinner, { SpinnerProps } from 'components/Spinner';
import * as CSS from 'csstype';
import React, { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import { ButtonSize, ButtonVariant } from 'theme';
import useTheme from 'useTheme';
import { compose } from 'utils/baseStyle';
import useMerge from 'utils/useMerge';
import { sizeVariant, typeVariant } from 'utils/variant';
import { ResponsiveValue } from '@styled-system/core';
import { shouldForwardProp } from 'utils/withConfig';

export type ButtonProps =
  {
    _spinner?: SpinnerProps;
    textTransform?: ResponsiveValue<CSS.TextTransformProperty>;
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

  const m = useMerge(
    p,
    typeVariant(button, 'solid', p),
    sizeVariant(button, 'md', p),
    button.default
  );
  const [left, right, { _spinner, ...props }] = comp(m);

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

const ButtonStyle = styled.div.withConfig<ButtonProps>({ shouldForwardProp })`
  ${compose(textBase, flexBase)}
`;
