import { defaults } from '../../utils/defaults';
import { GlobalBaseProps, SelectionBaseProps } from '../../bases';

export type GlobalValue = {
  _html: GlobalBaseProps;
  _body: GlobalBaseProps;
  _all: GlobalBaseProps;
  _selection: SelectionBaseProps;
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
    p: 0,
    bg: 'background'
  },
  _all: {
    boxSizing: 'border-box'
  },
  _selection: {
    color: 'background',
    backgroundColor: 'primary'
  }
};
