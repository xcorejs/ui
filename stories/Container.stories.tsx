import { Box, Container, container, createTheme, XcoreProvider } from '../src';
import React, { FC } from 'react';

export default { title: 'Container' };

export const Normal: FC = () => (
  <>
    <Container>
      <Box width="100%">
        <Box background="crimson" color="white" p="10px" my="10px">
          Box 1
        </Box>
        <Box background="navy" color="white" p="10px" my="10px">
          Box 2
        </Box>
      </Box>
    </Container>
    <Container px={0}>
      <Box width="100%">
        <Box background="crimson" color="white" p="10px" my="10px">
          Box 1
        </Box>
        <Box background="navy" color="white" p="10px" my="10px">
          Box 2
        </Box>
      </Box>
    </Container>
  </>
);

export const Fluid: FC = () => (
  <Container variant="fluid">
    <Box width="100%">
      <Box background="crimson" color="white" p="10px" my="10px">
        fluid
      </Box>
      <Box background="navy" color="white" p="10px" my="10px">
        Box 2
      </Box>
    </Box>
  </Container>
);

const theme = createTheme({
  name: 'Container theme',
  ...container({
    variants: {
      normal: {
        width: ['100%', '100%', '30rem', '40rem', '50rem', '70rem'],
        background: 'grey'
      },
      fluid: {
        background: 'crimson'
      }
    }
  })
});

export const WithTheme: FC = () => (
  <XcoreProvider theme={theme}>
    <Normal />
  </XcoreProvider>
);
