import { composedTextBase, TextBaseProps } from 'bases';
import React, { FC } from 'react';
import styled from 'styled-components';
import useTheme from 'useTheme';
import useMerge from 'utils/useMerge';
import { typeVariant } from 'utils/variant';

import { TypographyAs, TypographyVariant } from './theme';

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

  const props = useMerge(
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
  ${composedTextBase}
`;
