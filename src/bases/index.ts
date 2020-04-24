import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { XcoreTheme } from 'theme';
import { base, compose } from 'utils/baseStyle';

import {
  boxSystem,
  flexSystem,
  globalSystem,
  pseudoBoxSystem,
  selectionSystem,
  textSystem,
  pathSystem,
  pathHoverSystem
} from './configs';
import {
  BoxBaseProps,
  FlexBaseProps,
  GlobalBaseProps,
  IconBaseProps,
  PseudoBoxBaseProps,
  SelectionBaseProps,
  TextBaseProps
} from './types';

export * from './types';

type WithTheme = { theme: XcoreTheme };

export const selectionBase = (p: SelectionBaseProps & WithTheme) => css`
  ${selectionSystem(p)}
`;

export const boxBase = (p: BoxBaseProps & WithTheme): FlattenInterpolation<ThemeProps<XcoreTheme>> => css`
  ${boxSystem(p)}

  ${p._icon && css`
      & path {
        ${pseudoBoxBaseComposed({ ...p._icon, theme: p.theme })}
        ${pathSystem({ ...p._icon, theme: p.theme })}
      }
  `}

  ${p._selection && css`
      & *::selection {
        ${selectionBase({ ...p._selection, theme: p.theme })}
      }
  `}

  ${Object.keys(pseudoSelectors).map(k => p[k] && css`
      ${pseudoSelectors[k]} {
        ${pseudoBoxBaseComposed({ ...p[k], theme: p.theme })}
      }
  `)}

  ${p._group && Object.keys(groupPseudoSelectors).map(k => p._group![k] && css`
      ${groupPseudoSelectors[k]} {
        ${pseudoBoxBaseComposed({ ...p._group![k]!, theme: p.theme })}
      }
  `)}
`;
export const composedBoxBase = compose(boxBase);

export const pseudoBoxBase = base([boxBase], (p: PseudoBoxBaseProps & WithTheme) => css`
  ${pseudoBoxSystem(p)}
`);
const pseudoBoxBaseComposed = compose(pseudoBoxBase);

export const globalBase = base([boxBase], ({ webkitFontSmoothing, ...p }: GlobalBaseProps & WithTheme) => css`
  ${globalSystem(p)}
`);

export const flexBase = base([boxBase], (p: FlexBaseProps & WithTheme) => css`
  ${flexSystem({ display: p.display ?? 'flex' })}
`);

export const composedFlexBase = compose(flexBase);

export const iconBase = base([flexBase], (p: IconBaseProps & WithTheme) => css`
  flex-shrink: 0;
  backface-visibility: hidden;

  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;

    path {
      transition: fill 300ms;
      ${pathSystem(p)}
    }
  }

  &:not(:root) {
    overflow: hidden;
  }

  &:hover {
    svg path {
      ${pathHoverSystem(p)}
    }
  }
`);

export const composedIconBase = compose(iconBase);

export const textBase = base([boxBase], (p: TextBaseProps & WithTheme) => css`
  ${textSystem(p)}
`);

export const composedTextBase = compose(textBase);

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
  _placeholder: '&::placeholder',
  _focusWithin: '&:focus-within',
  _first: '&:first-child',
  _firstOfType: '&:first-of-type',
  _last: '&:last-child'
};

const groupPseudoSelectors: Record<GroupPseudoSelector, string> = {
  _hover: '[role=group]:hover &',
  _active: '[role=group]:active &',
  _focus: '[role=group]:focus &'
};
