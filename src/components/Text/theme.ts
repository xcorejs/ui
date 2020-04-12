import { TextProps } from '.';
import { defaultsTheme } from 'utils/defaultsTheme';

export type TextVariant =
 | 'span'
 | 'em'
 | 'strong'
 | 'underline'
 | 'abbr'
 | 'strikethrough'
 | 'sub'
 | 'sup';

export type TextAs =
  | 'span'
  | 'em'
  | 'strong'
  | 'u'
  | 'abbr'
  | 's'
  | 'sub'
  | 'sup'
  | 'time';

interface TextValue {
  default: TextProps;
  variants: Record<TextVariant, TextProps>;
}

export interface TextTheme {
  text: TextValue;
}

export const text = (t?: {
  default?: TextProps;
  variants?: Partial<Record<TextVariant, TextProps>>;
}): TextTheme => ({
  text: defaultsTheme<'variants', TextProps>(t, emptyText)
});

const emptyText: TextValue = {
  default: {
    fontFamily: 'text',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    transition: 'color 300ms',
    color: 'text'
  },
  variants: {
    span: {},
    em: {},
    strong: {},
    underline: {},
    abbr: {},
    strikethrough: {},
    sub: {},
    sup: {}
  }
};
