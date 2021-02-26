import { merge } from "./merge";
import { PseudoProp } from "./PseudoProp";

export interface ComponentTheme<P = {}, V extends keyof any = never, S extends keyof any = never> {
  baseStyle: P & PseudoProp;
  sizes: Record<S, P & PseudoProp>;
  variants: Record<V, P & PseudoProp>;
  defaultProps: {
    s?: S;
    v?: V;
  };
}

export type PartialComponentTheme<T extends ComponentTheme<any, any, any>> = Partial<T> & {
  sizes?: Partial<T["sizes"]>;
  variants?: Partial<T["variants"]>;
};

export type XcoreComponentProps<V extends keyof any = never, S extends keyof any = never> = {
  s?: S;
  v?: V;
};

export const extendTheme = <T extends ComponentTheme<{}, keyof any, keyof any>>(base: T, target?: PartialComponentTheme<T>): T => {
  return !target
    ? base
    : {
      ...base,
      baseStyle: merge(base.baseStyle, target.baseStyle),
      variants: mergeVariants(base.variants, target.variants),
      sizes: mergeVariants(base.sizes, target.sizes),
      defaultProps: merge(base.defaultProps, target.defaultProps)
    };
};

const mergeVariants = <T extends Record<string, any>>(target: T, source: T | undefined): T => Object.fromEntries(
  Object.entries(target).map(([k, v]) => [k, merge(v, source?.[k])])
) as T;
