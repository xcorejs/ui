import * as CSS from 'csstype';
import styled, { CSSProperties, css } from 'styled-components';
import * as system from 'styled-system';
import { ResponsiveValue } from 'styled-system';

import { IconProps } from './Icon';

export type TLen = string | 0 | number;

const pseudoSelectors: Record<string, string> = {
  hover: '&:hover',
  active: '&:active',
  focus: '&:focus',
  before: '&:before',
  after: '&:after',
  selection: '& *::selection',
  // eslint-disable-next-line max-len
  disabled: '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  groupHover: '[role=group]:hover &',
  groupHoverIcon: '[role=group]:hover & svg path',
  placeholder: '::placeholder',
  focusWithin: ':focus-within',
  first: '&:first-child',
  firstOfType: '&:first-of-type',
  last: '&:last-child'
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

    // Aliases
    column?: ResponsiveValue<CSS.GridColumnProperty>;
    row?: ResponsiveValue<CSS.GridRowProperty>;
  }
  & system.FontSizeProps
  & system.FlexProps
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
;

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

export const Box = styled.div<BoxProps>`
  ${p => boxStyle(p)}

  ${p => Object.keys(pseudoSelectors).map(k => (p as any)['_' + k] && css`
      ${pseudoSelectors[k]} {
        ${boxStyle((p as Record<string, BoxProps>)['_' + k])}
      }
    `)}
`;

export const boxStyle = (p: BoxProps) => css`
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
    }
  })(p)}
`;

export default Box;
