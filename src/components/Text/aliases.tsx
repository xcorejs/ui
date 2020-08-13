import React, { forwardRef } from 'react';

import Text, { ExtendedTextProps } from '.';
import { TextVariant } from './theme';

type TextAliasProps = Omit<ExtendedTextProps, 't' | 'type'>;

const makeAlias = (v: TextVariant) =>
  forwardRef<HTMLSpanElement, TextAliasProps>((p, ref) => <Text v={v} {...p} ref={ref} />);

export const Span = makeAlias('span');
export const Em = makeAlias('em');
export const Strong = makeAlias('strong');
export const Underline = makeAlias('underline');
export const Abbr = makeAlias('abbr');
export const Strikethrough = makeAlias('strikethrough');
export const Sub = makeAlias('sub');
export const Sup = makeAlias('sup');
