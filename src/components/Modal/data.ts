import { ComponentType, createContext, useContext, createElement, ReactNode, ReactElement } from 'react';

export interface ModalContext {
  push: <T>(modal: ComponentType<T>, props?: T) => unknown;
  replace: <T>(modal: ComponentType<any>, props?: T) => unknown;

  pop: () => unknown;

  go: (n: number) => unknown;
  back: () => unknown;
  forward: () => unknown;
}

export const ModalContext = createContext<ModalContext>({
  push: () => {},
  replace: () => {},

  pop: () => {},

  go: () => {},
  back: () => {},
  forward: () => {}
});

interface UseModal {
  // do not require props, if m is null or undefined
  (): [() => unknown, () => unknown];
  (m: null): [() => unknown, () => unknown];
  (m: undefined): [() => unknown, () => unknown];
  (m: () => ReactElement): [() => unknown, () => unknown];
  // open modal without defaultProps
  <T>(modal: ComponentType<T>): [OpenModal<T>, () => unknown];
  // open modal with defaultProps
  <T, U>(modal: ComponentType<T>, defaultProps: U): [OpenModal<Omit<T, keyof U> & Partial<U>>, () => unknown];
}

export const useModal: UseModal = <T, U>(modal?: ComponentType<T> | null, defaultProps?: U) => {
  const history = useContext(ModalContext);

  return [
    (props: T) => modal
      ? history.push(modal, { ...defaultProps, ...props })
      : history.pop(),
    history.pop,
    history
  ] as any;
};

export const useModalHistory = () => useContext(ModalContext);

interface ModalInstanceContext {
  active: boolean;
}

export const ModalInstanceContext = createContext<ModalInstanceContext>({ active: false });

type OpenModal<T> = T extends {} ? (props: T) => unknown : () => unknown;
