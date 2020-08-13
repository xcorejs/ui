import { flexBase, FlexBaseProps, textBase, TextBaseProps } from 'bases';
import Complement, { comp, ComplementProps } from 'components/Complement';
import React, { FC, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import useTheme from 'useTheme';
import { compose } from 'utils/baseStyle';
import useMerge from 'utils/useMerge';
import { typeVariant } from 'utils/variant';
import { shouldForwardProp } from 'utils/withConfig';

import { TagVariant } from './theme';

export type TagProps =
  & ComplementProps
  & FlexBaseProps
  & TextBaseProps;

export type ExtendedTagProps = {
  variant?: TagVariant;
  v?: TagVariant;

  children?: ReactNode;
} & TagProps;

const Tag = forwardRef<HTMLDivElement, ExtendedTagProps>(({ children, ...p }, ref) => {
  const { tag } = useTheme();

  const m = useMerge(
    p,
    typeVariant(tag, 'solid', p),
    tag.default
  );
  const [left, right, props] = comp(m);

  return (
    <TagStyle
      whiteSpace="nowrap"
      alignItems='center'
      userSelect='none'
      transition='color 300ms, background 300ms, border-color 300ms'
      {...props}
      ref={ref}
    >
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </TagStyle>
  );
});

export default Tag;

const TagStyle = styled.div.withConfig<TagProps>({ shouldForwardProp })`
  ${compose(flexBase, textBase)}
`;
