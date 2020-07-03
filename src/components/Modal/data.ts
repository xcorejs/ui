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
  (): [() => unknown];
  (m: null): [() => unknown];
  (m: undefined): [() => unknown];
  (m: () => ReactElement): [() => unknown];
  <T>(modal: ComponentType<T>, defaultProps?: Partial<T>): [OpenModal<T>];
}

export const useModal: UseModal = <T>(
  modal?: ComponentType<T> | null,
  defaultProps?: Partial<T>
) => {
  const { push, pop } = useContext(ModalContext);

  return [
    (props: T) => modal
      ? push(modal, { ...defaultProps, ...props })
      : pop()
  ] as any;
};

export const useModalHistory = () => useContext(ModalContext);

interface ModalInstanceContext {
  active: boolean;
}

export const ModalInstanceContext = createContext<ModalInstanceContext>({ active: false });

type OpenModal<T> = T extends {} ? (props: T) => unknown : () => unknown;
