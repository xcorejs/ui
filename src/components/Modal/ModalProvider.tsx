import React, { createElement, FC, useState, ComponentType } from 'react';

import { ModalContext, ModalInstanceContext } from './data';

const ModalProvider: FC = ({ children }) => {
  const [position, setPosition] = useState(-1);
  const [modals, setModal] = useState<ComponentType[]>([]);

  const context: ModalContext = {
    push: m => {
      setModal(v => [...v, m]);
      setPosition(p => p + 1);
    },
    replace: m => {
      setModal(v => [...v.slice(0, -1), m]);
      setPosition(p => p + 1);
    },

    pop: () => {
      setModal(v => v.slice(0, -1));
      setPosition(p => p - 1);
    },

    go: (n: number) => setPosition(p => p + n),
    back: () => setPosition(p => p - 1),
    forward: () => setPosition(p => p + 1)
  };

  return (
    <ModalContext.Provider value={context}>
      {children}
      {position !== -1 && modals.map((m, i) => (
        <ModalInstanceContext.Provider key={i} value={{ active: i === position }}>
          {createElement(m)}
        </ModalInstanceContext.Provider>
      ))}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
