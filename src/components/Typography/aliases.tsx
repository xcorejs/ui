import React, { FC } from 'react';

import Typography, { ExtendedTypographyProps } from '.';

type TypograhyAliasProps = Omit<ExtendedTypographyProps, 't' | 'type'>;

export const Heading1: FC<TypograhyAliasProps> = p =>
  <Typography t="h1" {...p} />;

export const Heading2: FC<TypograhyAliasProps> = p =>
  <Typography t="h2" {...p} />;

export const Heading3: FC<TypograhyAliasProps> = p =>
  <Typography t="h3" {...p} />;

export const Heading4: FC<TypograhyAliasProps> = p =>
  <Typography t="h4" {...p} />;

export const Heading5: FC<TypograhyAliasProps> = p =>
  <Typography t="h5" {...p} />;

export const Heading6: FC<TypograhyAliasProps> = p =>
  <Typography t="h6" {...p} />;

export const Paragraph: FC<TypograhyAliasProps> = p =>
  <Typography t="p" {...p} />;

export const Lead: FC<TypograhyAliasProps> = p =>
  <Typography t="lead" {...p} />;
