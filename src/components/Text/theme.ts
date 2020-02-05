import { TextProps } from '.';
import { defaultsDeep } from 'lodash';

interface TextValue {
  default: TextProps;
  type: Record<TextType, TextProps>;
}

export type TextType =
 | 'em'
 | 'strong'
 | 'underline'
 | 'abbr'
 | 'strikethrough'
 | 'sub'
 | 'sup';

export interface TextTheme {
  text: TextValue;
}

const emptyText: TextValue = {
  default: {
    as: 'span'
  },
  type: {
    em: {
      as: 'em'
    },
    strong: {
      as: 'strong'
    },
    underline: {
      as: 'u'
    },
    abbr: {
      as: 'abbr'
    },
    strikethrough: {
      as: 's'
    },
    sub: {
      as: 'sub'
    },
    sup: {
      as: 'sup'
    }
  }
};

export const text = (
  text: {
    default?: TextProps;
    type?: Partial<Record<TextType, TextProps>>;
  } = emptyText
): TextTheme => ({
  text: defaultsDeep(text, emptyText)
});