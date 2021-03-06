import {
  Box,
  Button,
  Flex,
  Heading1,
  Img,
  LoremIpsum,
  Modal,
  Paragraph,
  Stack,
  useDisclosure,
  useModal,
  XcoreProvider
} from '@xcorejs/ui';
import React, { FC, useState } from 'react';

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
  return (
    <Modal title="title" s="lg">
      Another modal
    </Modal>
  );
};

const imgs = [
  'http://placekitten.com/400/600',
  'http://placekitten.com/400/800',
  'http://placekitten.com/600/600',
  'http://placekitten.com/800/600',
  'http://placekitten.com/800/1000',
  'http://placekitten.com/400/700'
];

export const WithProps: FC = () => {
  return (
    <XcoreProvider>
      <KittenGallery />
    </XcoreProvider>
  );
};

const KittenGallery: FC = () => {
  const [open, close] = useModal(Gallery, { images: imgs });

  return (
    <Box p="2rem">
      <Heading1>Kitten gallery</Heading1>
      <Stack gap="2rem">
        {imgs.map((i, index) => (
          <Img
            key={index}
            src={i}
            alt="img"
            maxWidth="10rem"
            maxHeight="10rem"
            onClick={() => open({ index })}
          />
        ))}
      </Stack>
    </Box>
  );
};

const Gallery: FC<{ index: number; images: string[] }> = ({ index, images }) => {
  const [offset, setOffset] = useState(0);

  const prev = (index + offset + images.length - 1) % images.length;
  const next = (index + offset + 1) % images.length;

  return (
    <Modal s="full" padding={0} bg="transparent">
      <Flex alignItems="center" fontSize="3rem" color="#455663">
        <Box m="1rem" onClick={() => setOffset(prev - index)}>{'<'}</Box>
        <Img src={images[index + offset]} alt="img" />
        <Box m="1rem" onClick={() => setOffset(next - index)}>{'>'}</Box>
      </Flex>
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
