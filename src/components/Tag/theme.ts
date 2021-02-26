import { ComponentTheme, extendTheme, PartialComponentTheme } from 'utils/theme';
import { ComplementThemeProps } from 'components/Complement';

export type TagVariant = 'solid' | 'outline' | 'clear';

export interface TagThemeProps extends ComplementThemeProps {

}

export type TagTheme = ComponentTheme<TagThemeProps, TagVariant>;

export const tagTheme = (t?: PartialComponentTheme<TagTheme>): { tag: TagTheme } =>({
  tag: extendTheme(emptyTag, t)
});

const emptyTag: TagTheme = {
  baseStyle: {
    whiteSpace: "nowrap",
    alignItems: "center",
    userSelect: "none",
    transition: "color 300ms, background 300ms, border-color 300ms",
    borderRadius: '0.3rem',
    border: '1px solid #455663',
    px: '0.8rem',
    fontSize: '1.2rem',
    fontWeight: 500,
    lineHeight: '2rem'
  },
  sizes: {},
  variants: {
    solid: {
      bg: '#455663',
      color: 'white'
    },
    outline: {
      color: '#0f1f28'
    },
    clear: {
      borderColor: 'transparent'
    }
  },
  defaultProps: {
    v: "solid"
  }
};
