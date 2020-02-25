import React, { FC } from 'react';
import styled from 'styled-components';

import useTheme from '../../useTheme';
import { textBase, TextProps } from '../Text';
import { TypographyAs, TypographyType } from './theme';

export type ExtendedTypographyProps =
  {
    type?: TypographyType;
    t?: TypographyType;
    as?: TypographyAs;
  }
  & TextProps;

const Typography: FC<ExtendedTypographyProps> = ({
  type: _type,
  t: _t,
  as: _as,
  ...props
}) => {
  const { typography: { default: _default, types } } = useTheme();
  const type = _type ?? _t ?? 'p';

  const as: TypographyAs = _as ?? (type === 'lead' ? 'p' : type);

  return (
    <TypographyStyle {..._default} {...types[type]} {...props} as={as} />
  );
};

export default Typography;

const TypographyStyle = styled.p<TextProps>`
  ${p => textBase(p)}
`;
