import React, { FC } from 'react';
import styled from 'styled-components';
import { merge } from 'utils/merge';

import { FlexBaseProps, textBase, TextBaseProps, flexBase } from '../../bases';

import useTheme from '../../useTheme';
import { compose } from '../../utils/baseStyle';
import { typeVariant } from '../../utils/variant';
import Complement, { comp, ComplementProps } from '../Complement';
import { TagVariant } from './theme';

export type TagProps =
  & ComplementProps
  & FlexBaseProps
  & TextBaseProps;

export type ExtendedTagProps = {
  variant?: TagVariant;
  v?: TagVariant;
} & TagProps;

const Tag: FC<ExtendedTagProps> = ({ children, ...p }) => {
  const { tag } = useTheme();

  const [left, right, props] = comp(
    merge(
      p,
      typeVariant(tag, 'solid', p),
      tag.default
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
  ${compose(flexBase, textBase)}
`;
