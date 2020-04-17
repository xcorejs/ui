import { defaultsScale } from './utils';
import { get } from '@styled-system/core';
import * as polished from 'polished';

export type Colors = {
  primary: string;
  text: string;
  background: string;
};

export type ColorScale = {
  colors: Colors;
};

export const colors = <T extends {}>(base: Colors = lightColorTheme, c: T & Partial<Colors> = {} as T) =>
  ({ colors: defaultsScale(c, base) as Colors & T });

export const lightColorTheme: Colors = {
  primary: '#0171b6',
  text: '#1E3441',
  background: '#fff'
};

export const darkColorTheme: Colors = {
  primary: '#DAA520',
  text: '#fff',
  background: '#211E15'
};

export const colorMod = (func: string) => (color: string, amount: number) => `__$${func};${color};${amount}`;

export const darken = colorMod('darken');
export const lighten = colorMod('lighten');

export const opacify = colorMod('opacify');
export const transparentize = colorMod('transparentize');

export const saturate = colorMod('saturate');
export const desaturate = colorMod('desaturate');

export const shade = colorMod('shade');
export const tint = colorMod('tint');

export const adjustHue = colorMod('adjustHue');

export const colorTransform = (val: string | number, s: any) => {
  const scale = s as Colors;
  if (typeof val === 'string' && val.startsWith('__')) {
    const reg = /__\$(.+);(\S+);(\S+)/.exec(val);
    if (reg) {
      const [_, func, color, amount] = reg;
      const a = Number(amount);
      const value = get<string>(scale, color, lightColorTheme[color as keyof Colors] || color);

      switch (func) {
        case 'darken':
          return polished.darken(a, value);
        case 'lighten':
          return polished.lighten(a, value);
        case 'opacify':
          return polished.opacify(a, value);
        case 'transparentize':
          return polished.transparentize(a, value);
        case 'saturate':
          return polished.saturate(a, value);
        case 'desaturate':
          return polished.desaturate(a, value);
        case 'shade':
          return polished.shade(a, value);
        case 'tint':
          return polished.tint(a, value);
        case 'adjustHue':
          return polished.adjustHue(a, value);
      }
    }

    return get(scale, val, lightColorTheme[val as keyof Colors] || val);
  }
  return get(scale, val, lightColorTheme[val as keyof Colors] || val);
};
