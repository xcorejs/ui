import { ComponentType, createContext, useContext } from 'react';

export interface ModalContext {
  push: (modal: ComponentType) => unknown;
  replace: (modal: ComponentType) => unknown;

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

export const useModal = (modal?: ComponentType | null): [() => unknown] => {
  const { push, pop } = useContext(ModalContext);

  return [() => modal ? push(modal) : pop()];
};

export const useModalHistory = () => useContext(ModalContext);

interface ModalInstanceContext {
  active: boolean;
}

export const ModalInstanceContext = createContext<ModalInstanceContext>({ active: false });
