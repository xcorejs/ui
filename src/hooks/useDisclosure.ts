import { useState } from 'react';

const useDisclosure = (initialState: boolean = false) => {
  const [isOpen, setState] = useState(initialState);

  const open = () => setState(true);
  const close = () => setState(false);
  const toggle = () => setState(!isOpen);

  return {
    isOpen,
    open,
    close,
    toggle
  };
};

export default useDisclosure;
