import React, { FC } from 'react';
import styled from 'styled-components';
import * as system from 'styled-system';
import * as CSS from 'csstype';

import useTheme from '../../useTheme';
import { defaults } from '../../utils/defaults';
import { typeVariant } from '../../utils/variant';
import Complement, { comp, ComplementProps } from '../Complement';
import { flexBase, FlexProps } from '../Flex';
import { TextProps, textBase } from '../Text';
import { TagType } from './theme';

export type TagProps =
  & ComplementProps
  & FlexProps
  & TextProps;

export type ExtendedTagProps = {
  type?: TagType;
  t?: TagType;
} & TagProps;

const Tag: FC<ExtendedTagProps> = ({ children, ...p }) => {
  const { tag } = useTheme();

  const [left, right, props] = comp(
    defaults(
      p,
      typeVariant(tag, 'solid', p)
    )
  );

  return (
    <TagStyle
      whiteSpace="nowrap"
      alignItems='center'
      userSelect='none'
      transition='color 300ms, background 300ms, border-color 300ms'
      {...props}
    >
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </TagStyle>
  );
};

export default Tag;

const TagStyle = styled.div<TagProps>`
  ${p => flexBase(p)}
  ${p => textBase(p)}
`;
