import { defaultsDeep } from 'lodash';

import { GlobalProps, SelectionProps } from '.';

export type GlobalValue = {
  _html: GlobalProps;
  _body: GlobalProps;
  _all: GlobalProps;
  _selection: SelectionProps;
};

export interface GlobalTheme {
  global: GlobalValue;
}

export const global = (g: Partial<GlobalValue> = emptyGlobal): GlobalTheme => ({
  global: defaultsDeep(g, emptyGlobal)
});

const emptyGlobal: GlobalValue = {
  _html: {
    fontSize: '10px',
    webkitFontSmoothing: 'antialiased',
    m: 0,
    p: 0
  },
  _body: {
    m: 0,
    p: 0
  },
  _all: {
    boxSizing: 'border-box'
  },
  _selection: {
    color: '#fff',
    bg: '#0171b6'
  }
};
