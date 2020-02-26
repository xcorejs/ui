import React, { FC } from 'react';
import styled from 'styled-components';

import { useTheme } from '../..';
import { textBase, TextBaseProps } from '../../bases';
import { defaults } from '../../utils/defaults';
import { variant } from '../../utils/variant';
import { TextAs, TextType } from './theme';
import { compose } from '../../utils/baseStyle';

export type TextProps = TextBaseProps;

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

const TextStyle = styled.span`
  ${compose(textBase)}
`;

export default Text;
