import { GlobalProps } from '.';
import { defaults } from '../../utils/defaults';
import { SelectionProps } from '../Box';

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
  global: defaults<GlobalValue>(g, emptyGlobal)
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
    backgroundColor: '#0171b6'
  }
};
