import { Box, Container, container, createTheme } from 'index';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export default { title: 'Container' };

export const BasicUsage: FC = () => (
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
);

const theme = createTheme({
  name: 'Container theme',
  ...container({
    width: '70%'
  })
});

export const WithTheme: FC = () => (
  <ThemeProvider theme={theme}>
    <BasicUsage />
  </ThemeProvider>
);
