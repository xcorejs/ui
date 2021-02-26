import { SystemProps, x } from '@xstyled/styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { StyledComponent } from 'styled-components';
import { XcoreComponentProps } from './theme';

type Styleable = keyof JSX.IntrinsicElements | React.ComponentType<any>;

type XcoreComponent<J extends Styleable, P, V extends keyof any = never, S extends keyof any = never> =
  StyledComponent<J, {}, SystemProps<Record<string | number, unknown>> & XcoreComponentProps<V, S> &  P, never>


export const xcoreComponent = <C extends Styleable, P = {}, V extends keyof any = never, S extends keyof any = never>(Component: ForwardRefRenderFunction<C, P  & XcoreComponentProps<V, S>>): XcoreComponent<C, P, V, S> => {
  const a =  hoistNonReactStatics(forwardRef(Component), x.div);

  return a as any;
}
