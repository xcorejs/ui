import React, { createElement, FC, useState, ComponentType } from 'react';

import { ModalContext, ModalInstanceContext } from './data';

interface ModalState {
  position: number;
  queue: [ComponentType<any>, any][];
}

const ModalProvider: FC = ({ children }) => {
  const [{ position, queue }, setState] = useState<ModalState>({ position: -1, queue: [] });

  const context: ModalContext = {
    push: (m, props) => {
      setState(s => ({
        position: s.position + 1,
        queue: [...s.queue, [m, props]]
      }));
    },
    replace: (m, props) => {
      setState(s => ({
        position: s.position + 1,
        queue: [...s.queue.slice(0, -1), [m, props]]
      }));
    },

    pop: () => {
      setState(s => ({
        position: s.position - 1,
        queue: [...s.queue.slice(0, -1)]
      }));
    },

    go: (n: number) => setState(s => ({
      position: s.position + n,
      queue: s.queue
    })),
    back: () => setState(s => ({
      position: s.position - 1,
      queue: s.queue
    })),
    forward: () => setState(s => ({
      position: s.position + 1,
      queue: s.queue
    }))
  };

  return (
    <ModalContext.Provider value={context}>
      {children}
      {position !== -1 && queue.map(([m, props], i) => (
        <ModalInstanceContext.Provider key={i} value={{ active: i === position }}>
          {createElement(m, props)}
        </ModalInstanceContext.Provider>
      ))}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
