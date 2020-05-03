import React, { FC, useState } from 'react';

import {
  Box,
  Button,
  LoremIpsum,
  Modal,
  Paragraph,
  useDisclosure,
  useModal,
  XcoreProvider,
  useModalHistory
} from '@xcorejs/ui';

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
  const [close] = useModal();
  const [openNext] = useModal(NextModal);
  const [val, setVal] = useState('');

  return (
    <Modal title="title" s="lg">
      <Button onClick={openNext}>Next modal</Button>
      <input value={val} onChange={e => setVal(e.target.value)} />
      <Button
        onClick={() => {
          submit(val);
          close();
        }}
      >Confirm
      </Button>
    </Modal>
  );
};

const NextModal: FC = () => {
  const { pop } = useModalHistory();
  const [val, setVal] = useState('');

  return (
    <Modal title="title" s="lg">
      Another modal
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
