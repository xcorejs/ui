import { composedTextBase, TextBaseProps } from 'bases';
import { TLen } from 'components/Box';
import CSS from 'csstype';
import React, { FC } from 'react';
import styled from 'styled-components';
import { system, ResponsiveValue } from '@styled-system/core';
import useTheme from 'useTheme';
import useMerge from 'utils/useMerge';
import { typeVariant } from 'utils/variant';

import { ListVariant } from './theme';

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
} & ListProps;

const List: FC<ExtendedListProps> = p => {
  const { list } = useTheme();

  const type = p.v ?? p.variant ?? 'unordered';

  const props = useMerge(p, typeVariant(list, 'unordered', p), list.default);

  return (
    <ListStyle as={type === 'unordered' ? 'ul' : 'ol'} {...props} />
  );
};

List.displayName = 'List';

export default List;

const ListStyle = styled.ul<ListProps>`
  ${composedTextBase}

  list-style-type: none;

  & li {
    display: flex;

    ${p => system({
      paddingLeft: true,
      marginBottom: true,
      color: true,
      fontSize: true,
      lineHeight: true,
      counterIncrement: true
    })(p._items)}

    &:before {
      ${p => system({
        content: true,
        position: true,
        color: true,
        marginRight: true,
        width: true,
        fontSize: true,
        lineHeight: true
      })(p._bullet)}
    }
  }

  & li:last-child {
    margin-bottom: 0;
  }

  ${system({
    counterReset: true
  })}
`;
