import React, { FC } from 'react';

import {
  ActiveBreakpoint,
  Box,
  breakpoints,
  container,
  createTheme,
  Heading3,
  Stack,
  Text,
  XcoreProvider
} from '../../src';

export default { title: 'Stack' };

export const BasicUsage: FC = () => {
  return (
    <XcoreProvider>
      <Stack direction="column" gap="10px">
        <Box background="red" color="white" p="10px" width="50%">
          Box 1
        </Box>
        <Box background="blue" color="white" p="10px" width="50%">
          Box 2
        </Box>
      </Stack>
      <Text>Lorem ipsum dolor sit amet</Text>
      <Stack direction="column" gap="10px" wrapItems>
        <Heading3>Title 1</Heading3>
        <Heading3>Title 2</Heading3>
        <Heading3>Title 3</Heading3>
      </Stack>
    </XcoreProvider>
  );
};

const theme = createTheme({
  name: 'Container theme',
  ...container({
    types: {
      normal: {
        width: ['100%', '100%', '30rem', '40rem', '50rem', '70rem'],
        background: 'grey'
      }
    }
  })
});

export const Responsive: FC = () => (
  <XcoreProvider theme={theme}>
    <Box>
      <ActiveBreakpoint
        bg={['green', 'lime', 'crimson', 'red', 'blue', 'navy']}
        mb="1rem"
        fontSize="1rem"
        p=".5rem"
        color="white"
      />
      <Stack direction={{ _: 'column', md: 'row' }} gap="10px">
        <Box background="crimson" color="white" p="10px" minWidth="50%">
          Box 1
        </Box>
        <Box background="navy" color="white" p="10px" minWidth="50%">
          Box 2
        </Box>
      </Stack>
      <Text>Lorem ipsum dolor sit amet</Text>
    </Box>
  </XcoreProvider>
);
