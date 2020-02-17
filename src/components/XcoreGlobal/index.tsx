import * as CSS from 'csstype';
import React, { FC } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import * as system from 'styled-system';

import useTheme from '../../useTheme';
import { BoxProps, SelectionProps, boxStyle } from '../Box';
import { GlobalValue } from './theme';

export type GlobalProps = {
  webkitFontSmoothing?: system.ResponsiveValue<string>;
  boxSizing?: system.ResponsiveValue<CSS.BoxSizingProperty>;
} & BoxProps;

const globalStyle = ({
  webkitFontSmoothing,
  ...p
}: GlobalProps
) => css`
  ${boxStyle(p)}

  ${system.system({
    boxSizing: {
      property: 'boxSizing'
    }
  })}
`;

const selectionStyle = (p: SelectionProps) => css`
  ${system.textShadow(p)}
  ${system.system({
    color: {
      property: 'color'
    },
    backgroundColor: {
      property: 'backgroundColor'
    },
    cursor: {
      property: 'cursor'
    },
    caretColor: {
      property: 'caretColor'
    },
    outline: {
      property: 'outline'
    },
    outlineOffset: {
      property: 'outlineOffset'
    },
    textDecoration: {
      property: 'textDecoration'
    },
    textEmphasisColor: {
      property: 'textEmphasisColor'
    }
  })(p)}
`;

const GlobalStyle = createGlobalStyle<GlobalValue>`
  html {
    ${p => globalStyle(p._html)}
  }

  body {
    ${p => globalStyle(p._body)}
  }

  *, *:before, *:after {
    ${p => globalStyle(p._all)}
  }

  ::-moz-selection {
    ${p => selectionStyle(p._selection)}
  }

  ::selection {
    ${p => selectionStyle(p._selection)}
  }
`;

const XcoreGlobal: FC = () => {
  const { global } = useTheme();
  return (
    <GlobalStyle {...global} />
  );
};

export default XcoreGlobal;
