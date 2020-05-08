import { composedTextBase, TextBaseProps } from 'bases';
import React, { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import useTheme from 'useTheme';
import useMerge from 'utils/useMerge';
import { typeVariant } from 'utils/variant';
import { shouldForwardProp } from 'utils/withConfig';

import { TextAs, TextVariant } from './theme';

export type TextProps = TextBaseProps;

export interface ExtendedTextProps extends TextProps {
  v?: TextVariant;
  variant?: TextVariant;
  as?: TextAs;
  children?: ReactNode;
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

  const props = useMerge(
    p,
    typeVariant(text, 'span', p),
    text.default
  );

  return (
    <TextStyle {...props} as={as} ref={ref} />
  );
});

const TextStyle = styled.span.withConfig<TextProps>({ shouldForwardProp })`
  ${composedTextBase}
`;

export default Text;
