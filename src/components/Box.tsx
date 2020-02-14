import css from '@styled-system/css';
import * as CSS from 'csstype';
import styled, { CSSProperties } from 'styled-components';
import * as system from 'styled-system';
import { ResponsiveValue } from 'styled-system';

import { IconProps } from './Icon';

export type TLen = string | 0 | number;

const PseudoSelectors = {
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
    _selection?: {
      color?: string;
      backgroundColor?: string;
      background?: string;
      cursor?: CSSProperties['cursor'];
      caretColor?: CSSProperties['caretColor'];
      outline?: CSSProperties['outline'];
      textDecoration?: CSSProperties['textDecoration'];
      textShadow?: CSSProperties['textShadow'];
    };
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

    style?: CSSProperties;
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

export const Box = styled.div<BoxProps>`
  ${system.border}
  ${system.boxShadow}
  ${system.color}
  ${system.layout}
  ${system.position}
  ${system.space}
  ${system.background}
  ${system.fontSize}
  ${system.fontWeight}
  ${system.gridColumn}
  ${system.gridRow}
  ${system.flex}
  ${system.zIndex}
  ${system.alignSelf}
  ${system.justifySelf}
  ${(
    {
      _hover,
      _active,
      _focus,
      _before,
      _after,
      _disabled,
      _groupHover,
      _groupHoverIcon,
      _selection,
      _placeholder,
      _focusWithin,
      _first,
      _firstOfType,
      _last
    }) => css({
    [PseudoSelectors.hover]: _hover,
    [PseudoSelectors.active]: _active,
    [PseudoSelectors.focus]: _focus,
    [PseudoSelectors.before]: _before,
    [PseudoSelectors.after]: _after,
    [PseudoSelectors.disabled]: _disabled,
    [PseudoSelectors.groupHover]: _groupHover,
    [PseudoSelectors.groupHoverIcon]: _groupHoverIcon,
    [PseudoSelectors.selection]: _selection,
    [PseudoSelectors.placeholder]: _placeholder,
    [PseudoSelectors.focusWithin]: _focusWithin,
    [PseudoSelectors.first]: _first,
    [PseudoSelectors.firstOfType]: _firstOfType,
    [PseudoSelectors.last]: _last
  })}

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
  })}
`;

const jeff = '';

export default Box;
