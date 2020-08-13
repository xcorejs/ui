import React, { forwardRef } from 'react';

import Typography, { ExtendedTypographyProps } from '.';
import { TypographyVariant } from './theme';

type TypograhyAliasProps = Omit<ExtendedTypographyProps, 't' | 'type'>;

const makeAlias = (v: TypographyVariant) =>
  forwardRef<HTMLDivElement, TypograhyAliasProps>((p, ref) => <Typography v={v} {...p} ref={ref} />);

export const Heading1 = makeAlias('h1');
export const Heading2 = makeAlias('h2');
export const Heading3 = makeAlias('h3');
export const Heading4 = makeAlias('h4');
export const Heading5 = makeAlias('h5');
export const Heading6 = makeAlias('h6');
export const Paragraph = makeAlias('p');
export const Lead = makeAlias('lead');
