import * as CSS from 'csstype';
import React, { FC } from 'react';
import styled, { css, CSSProperties } from 'styled-components';
import * as system from 'styled-system';

import { useTheme } from '../..';
import { defaults } from '../../utils/defaults';
import { variant } from '../../utils/variant';
import { boxBase, BoxProps, TLen } from '../Box';
import { TextAs, TextType } from './theme';

export type TextProps =
  {
    color?: string;
    whiteSpace?: system.ResponsiveValue<CSS.WhiteSpaceProperty>;

    textDecoration?: system.ResponsiveValue<CSS.TextDecorationProperty<TLen>>;
    textOverflow?: system.ResponsiveValue<CSS.TextOverflowProperty>;
    textTransform?: system.ResponsiveValue<CSS.TextTransformProperty>;

    transition?: system.ResponsiveValue<CSS.TransitionProperty>;
    WebkitLineClamp?: system.ResponsiveValue<CSS.WebkitLineClampProperty>;
    WebkitBoxOrient?: system.ResponsiveValue<CSSProperties['WebkitBoxOrient']>;
  }
  & Omit<system.ColorProps, 'color'>
  & system.TypographyProps
  & system.SpaceProps
  & system.TextShadowProps
  & BoxProps;

export interface ExtendedTextProps extends TextProps {
  t?: TextType;
  type?: TextType;
  as?: TextAs;
}

const Text: FC<ExtendedTextProps> = ({ as: _as, ...p }) => {
  const { text } = useTheme();

  const as = (_as ?? {
    span: 'span',
    em: 'em',
    strong: 'strong',
    underline: 'u',
    abbr: 'abbr',
    strikethrough: 's',
    sub: 'sub',
    sup: 'sup'
  }[p.type ?? p.t ?? 'span']) as TextAs;

  const props = defaults(
    p,
    variant(text.types, 'span', p.t, p.type),
    text.default
  );

  return (
    <TextStyle {...props} as={as} />
  );
};

const TextStyle = styled.span<TextProps>`
  ${p => textBase(p)}
`;

export const textBase = (p: TextProps) => css`
  ${boxBase(p)}

  ${system.system({
    textTransform: true,
    WebkitLineClamp: true,
    WebkitBoxOrient: true,
    transition: true,
    textOverflow: true,
    whiteSpace: true,
    textDecoration: true
  })(p)}
  ${system.typography(p)}
  ${system.color(p)}
  ${system.space(p)}
  ${system.textShadow(p)}
`;

export default Text;
