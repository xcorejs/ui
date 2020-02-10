import React, { FC } from 'react';
import styled from 'styled-components';
import { TextProps, TextStyle } from '../Text/index';
import { useTheme } from 'index';
import { TypographyAs, TypographyType } from './theme';

type TypographyProps =
  {

  }
  & TextProps;

const TypographyStyle = styled(TextStyle)<TypographyProps>``;

TypographyStyle.displayName = 'Typography';

type ExtendedTypography =
  ({ type: TypographyType; t?: undefined } | { t: TypographyType; type?: undefined })
  & { as?: TypographyAs }
  & TypographyProps;

const Typography: FC<ExtendedTypography> = ({
  type: _type,
  t: _t,
  as: _as,
  ...props
}) => {
  const { typography: { default: _default, types } } = useTheme();
  const type = _type! || _t!;

  const as: TypographyAs = _as || (type === 'lead' ? 'p' : type);

  return (
    <TypographyStyle {..._default} {...types[type]} {...props} as={as} />
  );
};

export default Typography;
