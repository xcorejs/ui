import React, { AnchorHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

import { textBase, TextBaseProps } from '../../bases';
import useTheme from '../../useTheme';
import { defaults } from '../../utils/defaults';
import { variant } from '../../utils/variant';
import { LinkAs, LinkType } from './theme';
import { compose } from '../../utils/baseStyle';

export type LinkProps =
  & TextBaseProps
  & AnchorHTMLAttributes<HTMLAnchorElement | HTMLSpanElement>;

export type ExtendedLinkProps = {
  as?: LinkAs;
  type?: LinkType;
  t?: LinkType;
} & LinkProps;

const Link: FC<ExtendedLinkProps> = p => {
  const { link } = useTheme();

  const props = defaults(
    p,
    variant(link.types, 'simple', p.t, p.type),
    link.default
  );

  return (
    <LinkStyle {...props} />
  );
};

const LinkStyle = styled.a`
  ${compose(textBase)}

  cursor: pointer;
  & * {
    cursor: pointer;
  }
`;

export default Link;
