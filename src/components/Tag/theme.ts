import { mergeThemes } from 'utils/mergeThemes';

import { TagProps } from '.';

export type TagVariant = 'solid' | 'outline' | 'clear';

interface TagValue {
  default: TagProps;
  variants: Record<TagVariant, TagProps>;
}

export interface TagTheme {
  tag: TagValue;
}

export const tag = (t?: {
  default?: TagProps;
  variants?: Partial<Record<TagVariant, TagProps>>;
}): TagTheme => ({ tag: mergeThemes<'variants', TagProps>(t, emptyTag) });

const emptyTag: TagValue = {
  default: {
    borderRadius: '0.3rem',
    border: '1px solid',
    borderColor: 'gray.700',
    px: '0.8rem',
    fontFamily: 'text',
    fontSize: '1.2rem',
    fontWeight: 500,
    lineHeight: '2rem'
  },
  variants: {
    solid: {
      bg: '#455663',
      color: 'background'
    },
    outline: {
      color: '#0f1f28'
    },
    clear: {
      borderColor: 'transparent'
    }
  }
};
