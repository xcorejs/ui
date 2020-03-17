import React, { FC } from 'react';
import styled from 'styled-components';

import useTheme from '../../useTheme';
import { TypographyAs, TypographyVariant } from './theme';
import { TextBaseProps, textBase } from '../../bases';
import { defaults } from '../../utils/defaults';
import { typeVariant } from '../../utils/variant';
import { compose } from '../../utils/baseStyle';

export type TypographyProps = TextBaseProps;

export type ExtendedTypographyProps =
  {
    variant?: TypographyVariant;
    v?: TypographyVariant;
    as?: TypographyAs;
  }
  & TypographyProps;

const Typography: FC<ExtendedTypographyProps> = ({
  as: _as,
  ...p
}) => {
  const { typography } = useTheme();
  const type = p.variant ?? p.v ?? 'p';

  const as: TypographyAs = _as ?? (type === 'lead' ? 'p' : type);

  const props = defaults(
    p,
    typeVariant(typography, 'p', p),
    typography.default
  );

  return (
    <TypographyStyle {...props} as={as} />
  );
};

export default Typography;

const TypographyStyle = styled.p<TypographyProps>`
  ${compose(textBase)}
`;
