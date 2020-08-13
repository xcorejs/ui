import { composedTextBase, TextBaseProps } from 'bases';
import { TLen } from 'components/Box';
import CSS from 'csstype';
import React, { FC, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import { system, ResponsiveValue } from '@styled-system/core';
import useTheme from 'useTheme';
import useMerge from 'utils/useMerge';
import { typeVariant } from 'utils/variant';
import { shouldForwardProp } from 'utils/withConfig';

import { ListVariant } from './theme';
import { polyfillTheme } from 'utils/baseStyle';

export type ListProps =
  {
    counterReset?: ResponsiveValue<CSS.CounterResetProperty>;
    _items?: {
      paddingLeft?: ResponsiveValue<CSS.PaddingLeftProperty<TLen>>;
      marginBottom?: ResponsiveValue<CSS.MarginBottomProperty<TLen>>;
      color?: ResponsiveValue<string>;
      fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLen>>;
      lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLen>>;
      counterIncrement?: ResponsiveValue<CSS.CounterIncrementProperty>;
    };
    _bullet?: {
      content?: ResponsiveValue<CSS.ContentProperty>;
      position?: ResponsiveValue<CSS.PositionProperty>;
      color?: ResponsiveValue<string>;
      marginRight?: ResponsiveValue<CSS.MarginRightProperty<TLen>>;
      width?: ResponsiveValue<CSS.WidthProperty<TLen>>;
      fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLen>>;
      lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLen>>;
    };
  }
  & TextBaseProps;

export type ExtendedListProps = {
  variant?: ListVariant;
  v?: ListVariant;
  as?: 'ul' | 'ol';

  children?: ReactNode;
} & ListProps;

const List = forwardRef<HTMLUListElement, ExtendedListProps>((p, ref) => {
  const { list } = useTheme();

  const type = p.v ?? p.variant ?? 'unordered';

  const props = useMerge(p, typeVariant(list, 'unordered', p), list.default);

  return (
    <ListStyle as={type === 'unordered' ? 'ul' : 'ol'} {...props} ref={ref} />
  );
});

List.displayName = 'List';

export default List;

const listSystem = system({
  counterReset: true
});
const itemSystem = system({
  paddingLeft: true,
  marginBottom: true,
  color: true,
  fontSize: true,
  lineHeight: true,
  counterIncrement: true
});
const bulletSystem = system({
  content: true,
  position: true,
  color: true,
  marginRight: true,
  width: true,
  fontSize: true,
  lineHeight: true
});

const ListStyle = styled.ul.withConfig<ListProps>({ shouldForwardProp })`
  ${composedTextBase}

  list-style-type: none;

  & li {
    display: flex;

    ${p => itemSystem(polyfillTheme(p._items, p.theme))}

    &:before {
      ${p => bulletSystem(polyfillTheme(p._bullet, p.theme))}
    }
  }

  & li:last-child {
    margin-bottom: 0;
  }

  ${listSystem}
`;
