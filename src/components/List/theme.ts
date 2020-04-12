import { defaultsTheme } from 'utils/defaultsTheme';

import { ListProps } from '.';

export type ListVariant = 'ordered' | 'unordered';

interface ListValue {
  default: ListProps;
  variants: Record<ListVariant, ListProps>;
}

export interface ListTheme {
  list: ListValue;
}

export const list = (l?: {
  default?: ListProps;
  variants?: Partial<Record<ListVariant, ListProps>>;
}): ListTheme => ({ list: defaultsTheme<'variants', ListProps>(l, emptyList) });

const emptyList: ListValue = {
  default: {
    lineHeight: '2.4rem',
    margin: 0,
    padding: 0,
    _bullet: {
      content: '"\\2022"',
      color: '#152028',
      marginRight: '1.5rem'
    },
    _items: {
      color: 'text',
      paddingLeft: '.5rem',
      marginBottom: '1rem'
    }
  },
  variants: {
    ordered: {
      counterReset: 'list-counter',
      _items: {
        counterIncrement: 'list-counter'
      },
      _bullet: {
        position: 'relative',
        content: 'counter(list-counter)"." !important'
      }
    },
    unordered: {
      _bullet: {
        fontSize: '2.6rem'
      }
    }
  }
};
