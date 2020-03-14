import React, { FC, useState, createElement, ComponentType } from 'react';

import { ModalContext, ModalType } from './data';

const ModalProvider: FC = ({ children }) => {
  const [[modal], setModal] = useState<[ModalType] | []>([]);

  return (
    <ModalContext.Provider
      value={{ setModal: (m) => setModal([m]) }}
    >
      {children}
      {modal && createElement(modal, { close: () => setModal([]) })}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
