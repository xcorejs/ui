import { createContext, useContext, ComponentType, useMemo } from 'react';

export type ModalType = ComponentType<{ close: () => unknown}> | undefined | null;

interface ModalContext {
  setModal: (modal: ModalType) => unknown;
}

export const ModalContext = createContext<ModalContext>({
  setModal: () => {}
});

export const useModal = (modal: ModalType): [() => unknown] => {
  const { setModal } = useContext(ModalContext);

  return [() => setModal(modal)];
};
