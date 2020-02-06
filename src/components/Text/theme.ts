import { TextProps } from '.';
import { defaultsDeep } from 'lodash';

interface TextValue {
  default: TextProps;
  type: Record<TextType, TextProps>;
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

export interface TextTheme {
  text: TextValue;
}

const emptyText: TextValue = {
  default: {
  },
  type: {
    span: {
    },
    em: {
    },
    strong: {
    },
    underline: {
    },
    abbr: {
    },
    strikethrough: {
    },
    sub: {
    },
    sup: {
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
