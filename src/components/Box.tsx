import css from '@styled-system/css';
import styled, { CSSProperties } from 'styled-components';
import * as system from 'styled-system';

const PseudoSelectors = {
  hover: '&:hover',
  active: '&:active',
  focus: '&:focus',
  before: '&:before',
  after: '&:after',
  selection: '& *::selection',
  disabled:
    // eslint-disable-next-line max-len
    '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  groupHover: '[role=group]:hover &',
  placeholder: '::placeholder',
  focusWithin: ':focus-within',
  first: '&:first-child',
  last: '&:last-child'
};

export type BoxProps = {
  color?: string;
  _hover?: BoxProps;
  _active?: BoxProps;
  _focus?: BoxProps;
  _before?: BoxProps;
  _after?: BoxProps;
  _disabled?: BoxProps;
  _groupHover?: BoxProps;
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
  _last?: BoxProps;
  cursor?: system.ResponsiveValue<CSSProperties['cursor']>;
  animation?: system.ResponsiveValue<CSSProperties['animation']>;
  transition?: system.ResponsiveValue<CSSProperties['transition']>;
  outline?: system.ResponsiveValue<CSSProperties['outline']>;
  outlineOffset?: system.ResponsiveValue<CSSProperties['outlineOffset']>;
  content?: system.ResponsiveValue<CSSProperties['content']>;
  fontSize?: system.ResponsiveValue<CSSProperties['fontSize']>;
  transform?: system.ResponsiveValue<CSSProperties['transform']>;
} & system.BorderProps &
  system.BoxShadowProps &
  Omit<system.ColorProps, 'color'> &
  system.LayoutProps &
  system.PositionProps &
  system.SpaceProps &
  system.BackgroundProps &
  system.FontWeightProps;

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
  ${({
    _hover,
    _active,
    _focus,
    _before,
    _after,
    _disabled,
    _groupHover,
    _selection,
    _placeholder,
    _focusWithin,
    _first,
    _last
  }) =>
    css({
      [PseudoSelectors.hover]: _hover,
      [PseudoSelectors.active]: _active,
      [PseudoSelectors.focus]: _focus,
      [PseudoSelectors.before]: _before,
      [PseudoSelectors.after]: _after,
      [PseudoSelectors.disabled]: _disabled,
      [PseudoSelectors.groupHover]: _groupHover,
      [PseudoSelectors.selection]: _selection,
      [PseudoSelectors.placeholder]: _placeholder,
      [PseudoSelectors.focusWithin]: _focusWithin,
      [PseudoSelectors.first]: _first,
      [PseudoSelectors.last]: _last
    })}
  ${({ animation }) => animation && `animation: ${animation};`}
  ${({ transition }) => transition && `transition: ${transition};`}
  ${({ transform }) => transform && `transform: ${transform};`}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
`;

export default Box;
