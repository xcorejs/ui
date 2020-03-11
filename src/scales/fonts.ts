import { defaultsScale } from './utils';

export type Fonts = {
  heading: string;
  text: string;
};

export type FontScale = {
  fonts: Fonts;
};

export const fonts = <T extends Fonts>(f: Partial<T> = emptyFonts as T) =>
  ({ fonts: defaultsScale(f, emptyFonts) as T });

const emptyFonts: Fonts = {
  // eslint-disable-next-line max-len
  heading: '"rubik",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  text: '"rubik",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji'
};
