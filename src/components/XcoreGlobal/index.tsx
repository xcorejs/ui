import React, { FC } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import useTheme from '../../useTheme';
import { GlobalValue } from './theme';
import * as system from 'styled-system';
import * as CSS from 'csstype';
import { TLen } from '../Box';

export type SelectionProps =
  {
    color?: system.ResponsiveValue<string>;
    cursor?: system.ResponsiveValue<CSS.CursorProperty>;
    caretColor?: system.ResponsiveValue<CSS.CaretColorProperty>;
    outline?: system.ResponsiveValue<CSS.OutlineProperty<TLen>>;
    outlineOffset?: system.ResponsiveValue<CSS.OutlineOffsetProperty<TLen>>;
    textDecoration?: system.ResponsiveValue<CSS.TextDecorationProperty<TLen>>;
    textEmphasisColor?: system.ResponsiveValue<CSS.TextEmphasisColorProperty>;
  }
  & system.BackgroundColorProps
  & system.BackgroundProps
  & system.TextShadowProps;

export type GlobalProps = {
  color?: string;
  cursor?: system.ResponsiveValue<CSS.CursorProperty>;
  animation?: system.ResponsiveValue<CSS.AnimationProperty>;
  transition?: system.ResponsiveValue<CSS.TransitionProperty>;
  outline?: system.ResponsiveValue<CSS.OutlineProperty<TLen>>;
  outlineOffset?: system.ResponsiveValue<CSS.OutlineOffsetProperty<TLen>>;
  content?: system.ResponsiveValue<CSS.ContentProperty>;
  transform?: system.ResponsiveValue<CSS.TransformProperty>;
  filter?: system.ResponsiveValue<CSS.FilterProperty>;
  style?: CSS.Properties;
  webkitFontSmoothing?: system.ResponsiveValue<string>;
  boxSizing?: system.ResponsiveValue<CSS.BoxSizingProperty>;
}
& system.FontSizeProps
& system.FlexProps
& system.BorderProps
& system.BoxShadowProps
& Omit<system.ColorProps, 'color'>
& system.LayoutProps
& system.PositionProps
& system.SpaceProps
& system.BackgroundProps
& system.FontWeightProps
& system.GridColumnProps
& system.GridRowProps
& system.ZIndexProps
;

const globalStyle = ({
  animation,
  transition,
  transform,
  cursor,
  filter,
  webkitFontSmoothing,
  ...p
}: GlobalProps
) => css`
  ${system.border(p)}
  ${system.boxShadow(p)}
  ${system.color(p)}
  ${system.layout(p)}
  ${system.position(p)}
  ${system.space(p)}
  ${system.background(p)}
  ${system.fontSize(p)}
  ${system.fontWeight(p)}
  ${system.gridColumn(p)}
  ${system.gridRow(p)}
  ${system.flex(p)}
  ${system.zIndex(p)}
  ${animation && `animation: ${animation};`}
  ${transition && `transition: ${transition};`}
  ${transform && `transform: ${transform};`}
  ${cursor && `cursor: ${cursor};`}
  ${filter && `filter: ${filter};`}
  ${webkitFontSmoothing && `webkit-font-smoothing: ${webkitFontSmoothing}`}
`;

const selectionStyle = ({
  color,
  cursor,
  caretColor,
  outline,
  outlineOffset,
  textDecoration,
  textEmphasisColor,
  ...p
}: SelectionProps) => css`
  ${system.textShadow(p)}
  ${system.background(p)}
  ${color && `color: ${color}`}
  ${cursor && `cursor: ${cursor}`}
  ${caretColor && `caret-color: ${caretColor}`}
  ${outline && `outline: ${outline}`}
  ${outlineOffset && `outline-offset: ${outlineOffset}`}
  ${textDecoration && `text-decoration: ${textDecoration}`}
  ${textEmphasisColor && `text-emphasis-color: ${textEmphasisColor}`}
`;

const GlobalStyle = createGlobalStyle<GlobalValue>`
  html {
    ${p => globalStyle(p._html)}
  }

  body {
    ${p => globalStyle(p._body)}
  }

  *, *:before, *:after {
    ${p => globalStyle(p._all)}
  }

  ::-moz-selection {
    ${p => selectionStyle(p._selection)}
  }

  ::selection {
    ${p => selectionStyle(p._selection)}
  }
`;

const XcoreGlobal: FC = () => {
  const { global } = useTheme();
  return (
    <GlobalStyle {...global} />
  );
};

export default XcoreGlobal;
