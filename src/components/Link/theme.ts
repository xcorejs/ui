import { darken } from 'polished';

import { LinkProps } from '.';
import { defaultsTheme } from '../../utils/defaults';

export type LinkType = 'underline' | 'simple';
export type LinkAs = 'a' | 'span';

interface LinkValue {
  default: LinkProps;
  types: Record<LinkType, LinkProps>;
}

export interface LinkTheme {
  link: LinkValue;
}

export const link = (l: {
  default?: LinkProps;
  types?: Partial<Record<LinkType, LinkProps>>;
} = emptyLink): LinkTheme => ({ link: defaultsTheme<'types', LinkProps>(l, emptyLink) });

const emptyLink: LinkValue = {
  default: {
    color: '#0171B6',
    borderBottom: '1px solid #0171B6',
    fontSize: '1.6rem',
    lineHeight: 'initial',
    display: 'inline-flex',
    transition: 'color 300ms, border 300ms',
    cursor: 'pointer',

    _hover: {
      color: darken(0.025, '#0171b6'),
      borderBottom: '1px solid transparent'
    }
  },
  types: {
    underline: {},
    simple: {
      borderBottom: '1px solid transparent',

      _hover: {
        color: darken(0.025, '#0171b6'),
        borderBottom: '1px solid transparent'
      }
    }
  }
};
