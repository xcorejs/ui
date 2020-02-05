import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';
import * as system from 'styled-system';

import useTheme from '../../useTheme';
import Box, { BoxProps } from '../Box';
import { TextType } from './theme';

export type TextProps =
  {
    textTransform?: system.ResponsiveValue<CSSProperties['textTransform']>;
    transition?: system.ResponsiveValue<CSSProperties['transition']>;
    color?: string;
    userSelect?: CSSProperties['userSelect'];
    WebkitLineClamp?: system.ResponsiveValue<CSSProperties['WebkitLineClamp']>;
    WebkitBoxOrient?: CSSProperties['WebkitBoxOrient'];
    title?: string;
    as?: 'span' | 'em' | 'strong' | 'u' | 'abbr' | 's' | 'sup' | 'sub';
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

interface ExtendedTextProps extends TextProps {
  t?: TextType;
  type?: TextType;
}

const Text: FC<ExtendedTextProps> = ({ t, type: _type, ...props }) => {
  const { text } = useTheme();
  const type = _type || t;

  return (
    <TextStyle
      {...text}
      {...(type ? text.type[type] : {})}
      {...props}
    />
  );
};

export default Text;