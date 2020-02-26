import CSS from 'csstype';
import React, { FC } from 'react';
import styled from 'styled-components';
import * as system from 'styled-system';

import useTheme from '../../useTheme';
import { defaults } from '../../utils/defaults';
import { typeVariant } from '../../utils/variant';
import { TLen } from '../Box';
import { ListType } from './theme';
import { textBase, TextBaseProps } from '../../bases';
import { compose } from '../../utils/baseStyle';

export type ListProps =
  {
    counterReset?: system.ResponsiveValue<CSS.CounterResetProperty>;
    _items?: {
      paddingLeft?: system.ResponsiveValue<CSS.PaddingLeftProperty<TLen>>;
      marginBottom?: system.ResponsiveValue<CSS.MarginBottomProperty<TLen>>;
      color?: system.ResponsiveValue<string>;
      fontSize?: system.ResponsiveValue<CSS.FontSizeProperty<TLen>>;
      lineHeight?: system.ResponsiveValue<CSS.LineHeightProperty<TLen>>;
      counterIncrement?: system.ResponsiveValue<CSS.CounterIncrementProperty>;
    };
    _bullet?: {
      content?: system.ResponsiveValue<CSS.ContentProperty>;
      position?: system.ResponsiveValue<CSS.PositionProperty>;
      color?: system.ResponsiveValue<string>;
      marginRight?: system.ResponsiveValue<CSS.MarginRightProperty<TLen>>;
      width?: system.ResponsiveValue<CSS.WidthProperty<TLen>>;
      fontSize?: system.ResponsiveValue<CSS.FontSizeProperty<TLen>>;
      lineHeight?: system.ResponsiveValue<CSS.LineHeightProperty<TLen>>;
    };
  }
  & TextBaseProps;

export type ExtendedListProps = {
  type?: ListType;
  t?: ListType;
  as?: 'ul' | 'ol';
} & ListProps;

const List: FC<ExtendedListProps> = p => {
  const { list } = useTheme();

  const type = p.t ?? p.type ?? 'unordered';

  const props = defaults(p, typeVariant(list, 'unordered', p), list.default);

  return (
    <ListStyle as={type === 'unordered' ? 'ul' : 'ol'} {...props} />
  );
};

List.displayName = 'List';

export default List;

const ListStyle = styled.ul<ListProps>`
  ${compose(textBase)}

  list-style-type: none;

  & li {
    display: flex;

    ${p => system.system({
      paddingLeft: true,
      marginBottom: true,
      color: true,
      fontSize: true,
      lineHeight: true,
      counterIncrement: true
    })(p._items)}

    &:before {
      ${p => system.system({
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

  ${system.system({
    counterReset: true
  })}
`;
