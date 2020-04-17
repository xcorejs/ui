import CSS from 'csstype';
import { CSSProperties, DOMAttributes } from 'react';
import { ResponsiveValue } from '@styled-system/core';
import system from 'styled-system';
import { XcoreTheme } from 'theme';

type TLen = string | 0 | number;

export type SelectionBaseProps =
  {
    color?: ResponsiveValue<string>;
    cursor?: ResponsiveValue<CSS.CursorProperty>;
    caretColor?: ResponsiveValue<CSS.CaretColorProperty>;
    outline?: ResponsiveValue<CSS.OutlineProperty<TLen>>;
    outlineOffset?: ResponsiveValue<CSS.OutlineOffsetProperty<TLen>>;
    textDecoration?: ResponsiveValue<CSS.TextDecorationProperty<TLen>>;
    textEmphasisColor?: ResponsiveValue<CSS.TextEmphasisColorProperty>;

    theme?: XcoreTheme;
  }
  & system.BackgroundColorProps
  & system.TextShadowProps;

export type BoxBaseProps =
  {
    _hover?: BoxBaseProps;
    _active?: BoxBaseProps;
    _focus?: BoxBaseProps;
    _before?: PseudoBoxBaseProps;
    _after?: PseudoBoxBaseProps;
    _disabled?: BoxBaseProps;
    _groupHover?: BoxBaseProps;
    _groupHoverIcon?: IconBaseProps;
    _placeholder?: BoxBaseProps;
    _selection?: SelectionBaseProps;
    _focusWithin?: BoxBaseProps;
    _first?: BoxBaseProps;
    _firstOfType?: BoxBaseProps;
    _last?: BoxBaseProps;

    _group?: {
      _hover?: BoxBaseProps;
      _focus?: BoxBaseProps;
      _active?: BoxBaseProps;
    };

    _icon?: IconBaseProps;

    color?: string;
    cursor?: ResponsiveValue<CSS.CursorProperty>;
    animation?: ResponsiveValue<CSS.AnimationProperty>;
    transition?: ResponsiveValue<CSS.TransitionProperty>;
    outline?: ResponsiveValue<CSS.OutlineProperty<TLen>>;
    outlineOffset?: ResponsiveValue<CSS.OutlineOffsetProperty<TLen>>;
    transform?: ResponsiveValue<CSS.TransformProperty>;
    filter?: ResponsiveValue<CSS.FilterProperty>;
    placeSelf?: ResponsiveValue<CSS.PlaceSelfProperty>;
    userSelect?: system.ResponsiveValue<CSS.CursorProperty>;
    pointerEvents?: system.ResponsiveValue<CSS.PointerEventsProperty>;

    // Aliases
    column?: ResponsiveValue<CSS.GridColumnProperty>;
    row?: ResponsiveValue<CSS.GridRowProperty>;

    theme?: XcoreTheme;
  }
  & system.TypographyProps
  & system.FlexboxProps
  & system.BorderProps
  & system.BoxShadowProps
  & Omit<system.ColorProps, 'color'>
  & Omit<system.LayoutProps, 'size'>
  & system.PositionProps
  & system.SpaceProps
  & system.BackgroundProps
  & system.GridColumnProps
  & system.GridRowProps
  & system.ZIndexProps
  & system.JustifySelfProps
  & system.AlignSelfProps
  & Omit<DOMAttributes<HTMLElement>, 'children' | 'dangerouslySetInnerHTML'>;

export type PseudoBoxBaseProps = {
  content?: ResponsiveValue<CSS.ContentProperty>;
} & BoxBaseProps;

export type GlobalBaseProps = {
  webkitFontSmoothing?: ResponsiveValue<string>;
  boxSizing?: ResponsiveValue<CSS.BoxSizingProperty>;
} & BoxBaseProps;

export type FlexBaseProps =
  & system.FlexboxProps
  & BoxBaseProps;

export type IconBaseProps = {
  fill?: string;
  fillHover?: string;
} & FlexBaseProps;

export type TextBaseProps =
  {
    whiteSpace?: ResponsiveValue<CSS.WhiteSpaceProperty>;
    wordBreak?: ResponsiveValue<CSS.WordBreakProperty>;

    textDecoration?: ResponsiveValue<CSS.TextDecorationProperty<TLen>>;
    textOverflow?: ResponsiveValue<CSS.TextOverflowProperty>;
    textTransform?: ResponsiveValue<CSS.TextTransformProperty>;

    WebkitLineClamp?: ResponsiveValue<CSS.WebkitLineClampProperty>;
    WebkitBoxOrient?: ResponsiveValue<CSSProperties['WebkitBoxOrient']>;
  }
  & Omit<system.ColorProps, 'color'>
  & system.TypographyProps
  & system.TextShadowProps
  & BoxBaseProps;
