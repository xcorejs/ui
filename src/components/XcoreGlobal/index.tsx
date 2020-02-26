import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

import useTheme from '../../useTheme';
import { GlobalValue } from './theme';
import { globalBase, selectionBase } from '../../bases';

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
