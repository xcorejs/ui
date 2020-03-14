import React, { FC, useState } from 'react';

import {
  Box,
  Button,
  LoremIpsum,
  Modal,
  Paragraph,
  useDisclosure,
  useModal,
  XcoreProvider
} from '../../src';

export default { title: 'Modal' };

export const BasicUsage: FC = () => {
  return (
    <XcoreProvider>
      <Box>
        <NameForm />
      </Box>
    </XcoreProvider>
  );
};

const NameForm: FC = () => {
  const [name, setName] = useState('');
  const [open] = useModal(() => <NameModal submit={s => setName(s)} />);

  return (
    <>
      <Button onClick={() => open()}>Openmodal</Button>
      <Paragraph>{name}</Paragraph>
    </>
  );
};

const NameModal: FC<{ submit: (s: string) => unknown }> = ({ submit }) => {
  const [close] = useModal(null);
  const [val, setVal] = useState('');

  return (
    <Modal title="title" s="lg">
      <input value={val} onChange={e => setVal(e.target.value)} />
      <Button onClick={() => submit(val) || close()}>Confirm</Button>
    </Modal>
  );
};

export const LowLevelUsage: FC = () => {
  const { isOpen, open, close } = useDisclosure();

  return (
    <XcoreProvider>
      <Button onClick={open}>Open</Button>
      {isOpen && (
        <Modal title="title" onClose={close}>
          <Paragraph>
            <LoremIpsum />
          </Paragraph>
          <Paragraph>
            <LoremIpsum />
          </Paragraph>
        </Modal>
      )}
    </XcoreProvider>
  );
};
