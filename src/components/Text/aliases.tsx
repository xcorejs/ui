import React, { FC } from 'react';

import Text, { TextProps } from '.';

type TextAliasProps = Omit<TextProps, 't' | 'type'>;

export const Span: FC<TextAliasProps> = (p) =>
  <Text v="span" {...p} />;

export const Em: FC<TextAliasProps> = (p) =>
  <Text v="em" {...p} />;

export const Strong: FC<TextAliasProps> = (p) =>
  <Text v="strong" {...p} />;

export const Underline: FC<TextAliasProps> = (p) =>
  <Text v="underline" {...p} />;

export const Abbr: FC<TextAliasProps> = (p) =>
  <Text v="abbr" {...p} />;

export const Strikethrough: FC<TextAliasProps> = (p) =>
  <Text v="strikethrough" {...p} />;

export const Sub: FC<TextAliasProps> = (p) =>
  <Text v="sub" {...p} />;

export const Sup: FC<TextAliasProps> = (p) =>
  <Text v="sup" {...p} />;
