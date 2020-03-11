import * as CSS from 'csstype';
import { DOMAttributes } from 'react';
import { css, CSSProperties, FlattenInterpolation, ThemeProps } from 'styled-components';
import { ResponsiveValue } from 'styled-system';
import * as system from 'styled-system';

import { colorTransform } from '../scales/colors';
import { XcoreTheme } from '../theme';
import { base, compose } from '../utils/baseStyle';

type TLen = string | 0 | number;

export type SelectionBaseProps =
  {
    color?: system.ResponsiveValue<string>;
    cursor?: system.ResponsiveValue<CSS.CursorProperty>;
    caretColor?: system.ResponsiveValue<CSS.CaretColorProperty>;
    outline?: system.ResponsiveValue<CSS.OutlineProperty<TLen>>;
    outlineOffset?: system.ResponsiveValue<CSS.OutlineOffsetProperty<TLen>>;
    textDecoration?: system.ResponsiveValue<CSS.TextDecorationProperty<TLen>>;
    textEmphasisColor?: system.ResponsiveValue<CSS.TextEmphasisColorProperty>;

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
  webkitFontSmoothing?: system.ResponsiveValue<string>;
  boxSizing?: system.ResponsiveValue<CSS.BoxSizingProperty>;
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
    whiteSpace?: system.ResponsiveValue<CSS.WhiteSpaceProperty>;

    textDecoration?: system.ResponsiveValue<CSS.TextDecorationProperty<TLen>>;
    textOverflow?: system.ResponsiveValue<CSS.TextOverflowProperty>;
    textTransform?: system.ResponsiveValue<CSS.TextTransformProperty>;

    WebkitLineClamp?: system.ResponsiveValue<CSS.WebkitLineClampProperty>;
    WebkitBoxOrient?: system.ResponsiveValue<CSSProperties['WebkitBoxOrient']>;
  }
  & Omit<system.ColorProps, 'color'>
  & system.TypographyProps
  & system.TextShadowProps
  & BoxBaseProps;

export const selectionBase = (p: SelectionBaseProps) => css`
  ${system.system({
    color: {
      property: 'color',
      scale: 'colors',
      transform: colorTransform
    },
    backgroundColor: {
      property: 'backgroundColor',
      scale: 'colors',
      transform: colorTransform
    },
    cursor: true,
    caretColor: true,
    outline: true,
    outlineOffset: true,
    textDecoration: true,
    textEmphasisColor: true,
    textShadow: true
  })(p)}
`;

export const boxBase = (p: BoxBaseProps): FlattenInterpolation<ThemeProps<XcoreTheme>> => css`
  ${system.border(p)}
  ${system.boxShadow(p)}
  ${system.layout(p)}
  ${system.position(p)}
  ${system.space(p)}
  ${system.fontSize(p)}
  ${system.fontWeight(p)}
  ${system.gridColumn(p)}
  ${system.gridRow(p)}
  ${system.zIndex(p)}
  ${system.flexbox(p)}

  ${system.typography(p)}

  ${system.system({
    animation: true,
    transition: true,
    transform: true,
    cursor: true,
    filter: true,
    placeSelf: true,
    column: {
      property: 'gridColumn'
    },
    row: {
      property: 'gridRow'
    },
    userSelect: true,
    pointerEvents: true,
    outline: true,
    outlineOffset: true,
    background: {
      property: 'background',
      scale: 'colors',
      transform: colorTransform
    },
    color: {
      property: 'color',
      scale: 'colors',
      transform: colorTransform
    },
    backgroundColor: {
      property: 'backgroundColor',
      scale: 'colors',
      transform: colorTransform
    },
    bg: {
      property: 'backgroundColor',
      scale: 'colors',
      transform: colorTransform
    },
    opacity: true
  })(p)}

  ${p._selection && css`
      & *::selection {
        ${selectionBase(p._selection)}
      }
  `}

  ${p._groupHoverIcon && css`
      [role=group]:hover & {
        ${iconBaseComposed(p._groupHoverIcon)}
      }
  `}

  ${Object.keys(pseudoSelectors).map(k => p[k] && css`
      ${pseudoSelectors[k]} {
        ${pseudoBoxBaseComposed({ ...p[k]!, theme: p.theme })}
      }
  `)}
`;

export const pseudoBoxBase = base([boxBase], (p: PseudoBoxBaseProps) => css`
  ${system.system({
    content: true
  })(p)}
`);

const pseudoBoxBaseComposed = compose(pseudoBoxBase);

export const globalBase = base([boxBase], ({ webkitFontSmoothing, ...p }: GlobalBaseProps) => css`
  ${system.system({
    boxSizing: {
      property: 'boxSizing'
    }
  })(p)}
`);

export const flexBase = base([boxBase], (p: FlexBaseProps) => css`
  ${system.display({ display: p.display ?? 'flex' })}
`);

export const iconBase = base([flexBase], (p: IconBaseProps) => css`
  flex-shrink: 0;
  backface-visibility: hidden;

  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;

    path {
      transition: fill 300ms;
      ${system.system({
        fill: {
          property: 'fill',
          scale: 'colors'
        }
      })(p)}

    }
  }

  &:not(:root) {
    overflow: hidden;
  }

  &:hover {
    svg path {
      ${system.system({
        fillHover: {
          property: 'fill',
          scale: 'colors'
        }
      })(p)}
    }
  }
`);

const iconBaseComposed = compose(iconBase);

export const textBase = base([boxBase], (p: TextBaseProps) => css`
  ${system.system({
    textTransform: true,
    WebkitLineClamp: true,
    WebkitBoxOrient: true,
    textOverflow: true,
    whiteSpace: true,
    textDecoration: true
  })(p)}
  ${system.textShadow(p)}
`);

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
  _before: '&::before',
  _after: '&::after',
  // eslint-disable-next-line max-len
  _disabled: '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  _groupHover: '[role=group]:hover &',
  _placeholder: '::placeholder',
  _focusWithin: ':focus-within',
  _first: '&:first-child',
  _firstOfType: '&:first-of-type',
  _last: '&:last-child'
};
