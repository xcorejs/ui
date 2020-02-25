import * as CSS from 'csstype';
import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import * as system from 'styled-system';
import { ResponsiveValue } from 'styled-system';

import { IconProps, iconBase } from './Icon';
import { DOMAttributes } from 'react';
import { XcoreTheme } from '../theme';

export type TLen = string | 0 | number;

type PseudoSelector =
  | '_hover'
  | '_active'
  | '_focus'
  | '_before'
  | '_after'
  | '_disabled'
  | '_groupHover'
  | '_placeholder'
  | '_focusWithin'
  | '_first'
  | '_firstOfType'
  | '_last';

const pseudoSelectors: Record<PseudoSelector, string> = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus',
  _before: '&:before',
  _after: '&:after',
  // eslint-disable-next-line max-len
  _disabled: '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  _groupHover: '[role=group]:hover &',
  _placeholder: '::placeholder',
  _focusWithin: ':focus-within',
  _first: '&:first-child',
  _firstOfType: '&:first-of-type',
  _last: '&:last-child'
};

export type BoxProps =
  {
    _hover?: BoxProps;
    _active?: BoxProps;
    _focus?: BoxProps;
    _before?: BoxProps;
    _after?: BoxProps;
    _disabled?: BoxProps;
    _groupHover?: BoxProps;
    _groupHoverIcon?: IconProps;
    _placeholder?: BoxProps;
    _selection?: SelectionProps;
    _focusWithin?: BoxProps;
    _first?: BoxProps;
    _firstOfType?: BoxProps;
    _last?: BoxProps;

    color?: string;
    cursor?: ResponsiveValue<CSS.CursorProperty>;
    animation?: ResponsiveValue<CSS.AnimationProperty>;
    transition?: ResponsiveValue<CSS.TransitionProperty>;
    outline?: ResponsiveValue<CSS.OutlineProperty<TLen>>;
    outlineOffset?: ResponsiveValue<CSS.OutlineOffsetProperty<TLen>>;
    content?: ResponsiveValue<CSS.ContentProperty>;
    transform?: ResponsiveValue<CSS.TransformProperty>;
    filter?: ResponsiveValue<CSS.FilterProperty>;
    placeSelf?: ResponsiveValue<CSS.PlaceSelfProperty>;
    userSelect?: system.ResponsiveValue<CSS.CursorProperty>;
    pointerEvents?: system.ResponsiveValue<CSS.PointerEventsProperty>;

    // Aliases
    column?: ResponsiveValue<CSS.GridColumnProperty>;
    row?: ResponsiveValue<CSS.GridRowProperty>;
  }
  & system.FontSizeProps
  & system.FlexboxProps
  & system.BorderProps
  & system.BoxShadowProps
  & Omit<system.ColorProps, 'color'>
  & Omit<system.LayoutProps, 'size'>
  & system.PositionProps
  & system.SpaceProps
  & system.BackgroundProps
  & system.FontWeightProps
  & system.GridColumnProps
  & system.GridRowProps
  & system.ZIndexProps
  & system.JustifySelfProps
  & system.AlignSelfProps
  & Omit<DOMAttributes<HTMLElement>, 'children' | 'dangerouslySetInnerHTML'>;

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
  & system.TextShadowProps;

const Box = styled.div<BoxProps>`
  ${p => boxBase(p)}
`;

export const boxBase = (p: BoxProps): FlattenInterpolation<ThemeProps<XcoreTheme>> => css`
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
  ${system.flexbox(p)}
  ${system.zIndex(p)}
  ${system.alignSelf(p)}
  ${system.justifySelf(p)}

  ${system.system({
    animation: true,
    transition: true,
    transform: true,
    cursor: true,
    filter: true,
    alignSelf: true,
    justifySelf: true,
    placeSelf: true,
    column: {
      property: 'gridColumn'
    },
    row: {
      property: 'gridRow'
    },
    userSelect: true,
    pointerEvents: true
  })(p)}

  ${p._selection && css`
      & *::selection {
        ${selectionBase(p._selection)}
      }
  `}

  ${p._groupHoverIcon && css`
      [role=group]:hover & svg path {
        ${iconBase(p._groupHoverIcon)}
      }
  `}

  ${Object.keys(pseudoSelectors).map(k => p[k] && css`
      ${pseudoSelectors[k]} {
        ${boxBase(p[k]!)}
      }
  `)}
`;

export const selectionBase = (p: SelectionProps) => css`
  ${system.system({
    color: true,
    backgroundColor: true,
    cursor: true,
    caretColor: true,
    outline: true,
    outlineOffset: true,
    textDecoration: true,
    textEmphasisColor: true,
    textShadow: true
  })(p)}
`;

export default Box;
