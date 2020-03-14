import 'react';
import { XcoreTheme } from './theme';

declare module 'react' {
  interface ExoticComponent<P = {}> {
    (props: PropsWithChildren<P>): (ReactElement|null);
    readonly $$typeof: symbol;
  }
}
