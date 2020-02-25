import * as CSS from 'csstype';
import React, { FC } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import * as system from 'styled-system';

import useTheme from '../../useTheme';
import { boxBase, BoxProps, selectionBase } from '../Box';
import { GlobalValue } from './theme';

export type GlobalProps = {
  webkitFontSmoothing?: system.ResponsiveValue<string>;
  boxSizing?: system.ResponsiveValue<CSS.BoxSizingProperty>;
} & BoxProps;

const XcoreGlobal: FC = () => {
  const { global } = useTheme();
  return (
    <GlobalStyle {...global} />
  );
};

export default XcoreGlobal;

const GlobalStyle = createGlobalStyle<GlobalValue>`
  html {
    ${p => globalBase(p._html)}
  }

  body {
    ${p => globalBase(p._body)}
  }

  *, *:before, *:after {
    ${p => globalBase(p._all)}
  }

  ::-moz-selection {
    ${p => selectionBase(p._selection)}
  }

  ::selection {
    ${p => selectionBase(p._selection)}
  }
`;

const globalBase = ({
  webkitFontSmoothing,
  ...p
}: GlobalProps
) => css`
  ${boxBase(p)}

  ${system.system({
    boxSizing: {
      property: 'boxSizing'
    }
  })}
`;
