import { TextProps } from '.';
import { defaultsDeep } from 'lodash';

interface TextValue {
  default: TextProps;
  types: Record<TextType, TextProps>;
}

export type TextType =
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

export interface TextTheme {
  text: TextValue;
}

const emptyText: TextValue = {
  default: {
    fontFamily: 'rubik',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    transition: 'color 300ms'
  },
  types: {
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

export const text = (
  t: {
    default?: TextProps;
    type?: Partial<Record<TextType, TextProps>>;
  } = emptyText
): TextTheme => ({
  text: defaultsDeep(t, emptyText)
});
