import React, { FC } from 'react';
import styled from 'styled-components';

import useTheme from '../../useTheme';
import { defaults } from '../../utils/defaults';
import { typeVariant } from '../../utils/variant';
import Complement, { comp, ComplementProps } from '../Complement';
import { TagType } from './theme';
import { compose } from '../../utils/baseStyle';
import { FlexBaseProps, TextBaseProps, textBase } from '../../bases';
import { flexBase } from '../../bases/index';

export type TagProps =
  & ComplementProps
  & FlexBaseProps
  & TextBaseProps;

export type ExtendedTagProps = {
  type?: TagType;
  t?: TagType;
} & TagProps;

const Tag: FC<ExtendedTagProps> = ({ children, ...p }) => {
  const { tag } = useTheme();

  const [left, right, props] = comp(
    defaults(
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
