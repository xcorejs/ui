import { ComponentType, createContext, useContext } from 'react';

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

export const useModal = <T>(modal?: ComponentType<T> | null, defaultProps?: Partial<T>) => {
  const { push, pop } = useContext(ModalContext);

  return [
    (props: T) => modal
      ? push(modal, { ...defaultProps, ...props })
      : pop()
  ] as [OpenModal<T>];
};

export const useModalHistory = () => useContext(ModalContext);

interface ModalInstanceContext {
  active: boolean;
}

export const ModalInstanceContext = createContext<ModalInstanceContext>({ active: false });

type OpenModal<T> = T extends {} ? (props: T) => unknown : () => unknown;
