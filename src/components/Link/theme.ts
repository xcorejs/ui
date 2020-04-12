import { LinkProps } from '.';
import { darken } from '../../scales/colors';
import { defaultsTheme } from '../../utils/defaultsTheme';

export type LinkVariant = 'underline' | 'simple';
export type LinkAs = 'a' | 'span';

interface LinkValue {
  default: LinkProps;
  variants: Record<LinkVariant, LinkProps>;
}

export interface LinkTheme {
  link: LinkValue;
}

export const link = (l?: {
  default?: LinkProps;
  variants?: Partial<Record<LinkVariant, LinkProps>>;
}): LinkTheme => ({ link: defaultsTheme<'variants', LinkProps>(l, emptyLink) });

const emptyLink: LinkValue = {
  default: {
    color: 'primary',
    borderBottom: '1px solid',
    borderColor: 'primary',
    fontSize: '1.6rem',
    lineHeight: 'initial',
    display: 'inline-flex',
    transition: 'color 300ms, border 300ms',
    cursor: 'pointer',

    _hover: {
      color: darken('primary', 0.025),
      borderBottom: '1px solid transparent'
    }
  },
  variants: {
    underline: {},
    simple: {
      borderBottom: '1px solid transparent',

      _hover: {
        color: darken('primary', 0.025),
        borderBottom: '1px solid transparent'
      }
    }
  }
};
