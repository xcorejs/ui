import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { useTheme } from '../..';
import { textBase, TextBaseProps } from '../../bases';
import { compose } from '../../utils/baseStyle';
import { defaults } from '../../utils/defaults';
import { typeVariant } from '../../utils/variant';
import { TextAs, TextVariant } from './theme';

export type TextProps = TextBaseProps;

export interface ExtendedTextProps extends TextProps {
  v?: TextVariant;
  variant?: TextVariant;
  as?: TextAs;
}

const Text = forwardRef<HTMLSpanElement, ExtendedTextProps>(({ as: _as, ...p }, ref) => {
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
  }[p.variant ?? p.v ?? 'span']) as TextAs;

  const props = defaults(
    p,
    typeVariant(text, 'span', p),
    text.default
  );

  return (
    <TextStyle {...props} as={as} ref={ref} />
  );
});

const TextStyle = styled.span`
  ${compose(textBase)}
`;

export default Text;
