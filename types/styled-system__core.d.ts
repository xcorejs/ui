
type Scale<T> = Record<string | number | Symbol, T>;

declare module '@styled-system/core' {
  import CSS from 'csstype';
  export type ObjectOrArray<T, K extends keyof any = keyof any> = T[] | Record<K, T | Record<K, T> | T[]>;
  export type Scale = ObjectOrArray<number | string>;

  export type Config = {
    [P in string]?: boolean | ConfigStyle;
  };

  export interface ConfigStyle {
    property?: keyof CSS.Properties;
    properties?: Array<keyof CSS.Properties>;

    scale?: string;

    defaultScale?: Scale;

    transform?: (value: any, scale?: Scale) => any;
  }

  export interface Theme<TLength = TLengthStyledSystem> {
    breakpoints?: ObjectOrArray<number | string | symbol>;
    mediaQueries?: { [size: string]: string };
    space?: ObjectOrArray<CSS.MarginProperty<number | string>>;
    fontSizes?: ObjectOrArray<CSS.FontSizeProperty<number>>;
    colors?: ObjectOrArray<CSS.ColorProperty>;
    fonts?: ObjectOrArray<CSS.FontFamilyProperty>;
    fontWeights?: ObjectOrArray<CSS.FontWeightProperty>;
    lineHeights?: ObjectOrArray<CSS.LineHeightProperty<TLength>>;
    letterSpacings?: ObjectOrArray<CSS.LetterSpacingProperty<TLength>>;
    sizes?: ObjectOrArray<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>>;
    borders?: ObjectOrArray<CSS.BorderProperty<{}>>;
    borderStyles?: ObjectOrArray<CSS.BorderProperty<{}>>;
    borderWidths?: ObjectOrArray<CSS.BorderWidthProperty<TLength>>;
    radii?: ObjectOrArray<CSS.BorderRadiusProperty<TLength>>;
    shadows?: ObjectOrArray<CSS.BoxShadowProperty>;
    zIndices?: ObjectOrArray<CSS.ZIndexProperty>;
    buttons?: ObjectOrArray<CSS.StandardProperties>;
    colorStyles?: ObjectOrArray<CSS.StandardProperties>;
    textStyles?: ObjectOrArray<CSS.StandardProperties>;
  }

  export type RequiredTheme = Required<Theme>;

  export type ResponsiveValue<T, ThemeType extends Theme = RequiredTheme,> =
    | T
    | null
    | Array<T | null>
    | { [key in ThemeValue<'breakpoints', ThemeType> & string | number]?: T };

  export type ThemeValue<K extends keyof ThemeType, ThemeType, TVal = any> =
    ThemeType[K] extends TVal[] ? number :
      ThemeType[K] extends Record<infer E, TVal> ? E :
        ThemeType[K] extends ObjectOrArray<infer F> ? F : never;

  export function get<T>(obj: Scale<T>, ...paths: Array<string | number>): T;

  export function system(styleDefinitions: Config): styleFn;

  export interface styleFn {
    (...args: any[]): any;

    config?: object;
    propNames?: string[];
    cache?: object;
  }

}
