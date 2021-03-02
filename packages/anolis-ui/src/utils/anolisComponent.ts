import { SystemProps, x } from "@xstyled/emotion";
import { StyledComponent } from "@emotion/styled";
import hoistNonReactStatics from "hoist-non-react-statics";
import { forwardRef, ForwardRefRenderFunction, RefObject } from "react";
import { AnolisComponentProps } from "./theme";

type AnolisComponent<J extends keyof JSX.IntrinsicElements, P, V extends keyof any = never, S extends keyof any = never> =
  StyledComponent<
  SystemProps<Record<string | number, unknown>> & AnolisComponentProps<V, S> & { as?: React.ElementType } & P,
  {},
  JSX.IntrinsicElements[J]
  >;

export const anolisComponent = <
  C extends keyof JSX.IntrinsicElements,
  P = {},
  V extends keyof any = never,
  S extends keyof any = never
>(
  tag: C,
  Component: ForwardRefRenderFunction<RefOf<C>, P & AnolisComponentProps<V, S>>
): AnolisComponent<C, P, V, S> => {
  const a = forwardRef(hoistNonReactStatics(Component, x[tag]));

  return a as any;
};

type RefOf<K extends keyof JSX.IntrinsicElements> =
  Exclude<Parameters<Exclude<(JSX.IntrinsicElements[K]["ref"]), undefined | string | null | RefObject<{}>>>[0], null>;
