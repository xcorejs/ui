import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

import { globalBase, selectionBase } from '../../bases';
import useTheme from '../../useTheme';
import { compose } from '../../utils/baseStyle';
import { GlobalValue } from './theme';

const XcoreGlobal: FC = () => {
  const { global } = useTheme();
  return (
    <GlobalStyle {...global} />
  );
};

export default XcoreGlobal;

const base = compose(globalBase);

const GlobalStyle = createGlobalStyle<GlobalValue>`
  html {
    ${p => base(p._html)}
  }

  body {
    ${p => base(p._body)}
  }

  *, *:before, *:after {
    ${p => base(p._all)}
  }

  ::-moz-selection {
    ${p => selectionBase(p._selection)}
  }

  ::selection {
    ${p => selectionBase(p._selection)}
  }
`;
