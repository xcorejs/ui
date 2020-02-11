import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';
import * as system from 'styled-system';
import * as CSS from 'csstype';

import useTheme from '../../useTheme';
import Box, { BoxProps } from '../Box';
import { TextType, TextAs } from './theme';

export type TextProps =
  {
    textTransform?: system.ResponsiveValue<CSS.TextTransformProperty>;
    transition?: system.ResponsiveValue<CSS.TransitionProperty>;
    color?: string;
    userSelect?: CSS.UserSelectProperty;
    WebkitLineClamp?: system.ResponsiveValue<CSS.WebkitLineClampProperty>;
    WebkitBoxOrient?: CSSProperties['WebkitBoxOrient'];
    title?: string;
  }
  & Omit<system.ColorProps, 'color'>
  & system.TypographyProps
  & system.SpaceProps
  & system.TextShadowProps
  & BoxProps;

export const TextStyle = styled(Box)<TextProps>`
  ${system.system({
    textTransform: true,
    WebkitLineClamp: true,
    WebkitBoxOrient: true
  })}
  ${system.typography}
  ${system.color}
  ${system.space}
  ${system.textShadow}
  ${({ transition }) => transition && `transition: ${transition};`}
  ${({ userSelect }) => userSelect && `user-select: ${userSelect};`}
`;

export interface ExtendedTextProps extends TextProps {
  t?: TextType;
  type?: TextType;
  as?: TextAs;
}

const Text: FC<ExtendedTextProps> = ({ t: _t, type: _type, as: _as, ...props }) => {
  const { text: { default: _default, types } } = useTheme();
  const type = _type! || _t!;

  const as = _as || {
    span: 'span',
    em: 'em',
    strong: 'strong',
    underline: 'u',
    abbr: 'abbr',
    strikethrough: 's',
    sub: 'sub',
    sup: 'sup'
  }[type] as TextAs;

  return (
    <TextStyle
      {..._default}
      {...types[type]}
      {...props}
      as={as}
    />
  );
};

export default Text;
