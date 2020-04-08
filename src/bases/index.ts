import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import * as system from 'styled-system';

import { colorTransform } from '../scales/colors';
import { XcoreTheme } from '../theme';
import { base, compose } from '../utils/baseStyle';

import type {
  SelectionBaseProps,
  PseudoBoxBaseProps,
  GlobalBaseProps,
  FlexBaseProps,
  IconBaseProps,
  TextBaseProps,
  BoxBaseProps
} from './types';

export * from './types';

type WithTheme = { theme: XcoreTheme };

export const selectionBase = (p: SelectionBaseProps & WithTheme) => css`
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
    caretColor: {
      property: 'caretColor',
      scale: 'colors',
      transform: colorTransform
    },
    outline: true,
    outlineOffset: true,
    textDecoration: true,
    textEmphasisColor: {
      property: 'textEmphasisColor',
      scale: 'colors',
      transform: colorTransform
    },
    textShadow: true
  })(p)}
`;

export const boxBase = (p: BoxBaseProps & WithTheme): FlattenInterpolation<ThemeProps<XcoreTheme>> => css`
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

  ${p._icon && css`
      & path {
        ${pseudoBoxBaseComposed({ ...p._icon, theme: p.theme })}
        ${system.system({
          fill: {
            property: 'fill',
            scale: 'colors',
            transform: colorTransform
          }
        })({ ...p._icon, theme: p.theme })}
      }
  `}

  ${p._selection && css`
      & *::selection {
        ${selectionBase({ ...p._selection, theme: p.theme })}
      }
  `}

  ${p._groupHoverIcon && css`
      ${console.warn('Warning: _groupHoverIcon={...} is deprecated use _group={{ _hover: { _icon: {...} } }} instead!') as any}

      [role=group]:hover & {
        ${iconBaseComposed({ ...p._groupHoverIcon, theme: p.theme })}
      }
  `}

  ${Object.keys(pseudoSelectors).map(k => p[k] && css`
      ${k === '_groupHover' && console.warn('Warning: _groupHover={...} is deprecated use _group={{ _hover: ... }} instead!') as any}

      ${pseudoSelectors[k]} {
        ${pseudoBoxBaseComposed({ ...p[k]!, theme: p.theme })}
      }
  `)}

  ${p._group && Object.keys(groupPseudoSelectors).map(k => p._group![k] && css`
      ${groupPseudoSelectors[k]} {
        ${pseudoBoxBaseComposed({ ...p._group![k]!, theme: p.theme })}
      }
  `)}
`;

export const pseudoBoxBase = base([boxBase], (p: PseudoBoxBaseProps & WithTheme) => css`
  ${system.system({
    content: true
  })(p)}
`);

const pseudoBoxBaseComposed = compose(pseudoBoxBase);

export const globalBase = base([boxBase], ({ webkitFontSmoothing, ...p }: GlobalBaseProps & WithTheme) => css`
  ${system.system({
    boxSizing: {
      property: 'boxSizing'
    }
  })(p)}
`);

export const flexBase = base([boxBase], (p: FlexBaseProps & WithTheme) => css`
  ${system.display({ display: p.display ?? 'flex' })}
`);

export const iconBase = base([flexBase], (p: IconBaseProps & WithTheme) => css`
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
          scale: 'colors',
          transform: colorTransform
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

export const textBase = base([boxBase], (p: TextBaseProps & WithTheme) => css`
  ${system.system({
    textTransform: true,
    WebkitLineClamp: true,
    WebkitBoxOrient: true,
    textOverflow: true,
    whiteSpace: true,
    textDecoration: true,
    wordBreak: true
  })(p)}
  ${system.textShadow(p)}
`);

type GroupPseudoSelector =
  | '_hover'
  | '_active'
  | '_focus';

type PseudoSelector =
  | GroupPseudoSelector
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

const groupPseudoSelectors: Record<GroupPseudoSelector, string> = {
  _hover: '[role=group]:hover &',
  _active: '[role=group]:active &',
  _focus: '[role=group]:focus &'
};
