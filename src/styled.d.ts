import 'styled-components';
import { XcoreTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends XcoreTheme {

  }
}
