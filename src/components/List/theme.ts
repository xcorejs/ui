import { ListProps } from '.';
import { defaults, defaultsTheme } from '../../utils/defaults';

export type ListType = 'ordered' | 'unordered';

interface ListValue {
  default: ListProps;
  types: Record<ListType, ListProps>;
}

export interface ListTheme {
  list: ListValue;
}

export const list = (l: {
  default?: ListProps;
  types?: Partial<Record<ListType, ListProps>>;
} = emptyList): ListTheme => ({ list: defaultsTheme<'types', ListProps>(l, emptyList) });

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
      color: '#1e3441',
      paddingLeft: '.5rem',
      marginBottom: '1rem'
    }
  },
  types: {
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
