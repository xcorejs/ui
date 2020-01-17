import Box from 'components/Box';
import Container from 'components/Container';
import React, { FC } from 'react';
import { XcoreTheme, container } from 'theme';
import { ThemeProvider } from 'styled-components';

export default { title: 'Container' };

export const BasicUsage: FC = () => (
  <Container>
    <Box width="100%">
      <Box background="red" color="white" p="10px" my="10px">
        Box 1
      </Box>
      <Box background="blue" color="white" p="10px" my="10px">
        Box 2
      </Box>
    </Box>
  </Container>
);

const theme: XcoreTheme = {
  name: 'Container theme',
  ...container({
    width: '70%'
  })
};

export const WithTheme: FC = () => (
  <ThemeProvider theme={theme}>
    <BasicUsage />
  </ThemeProvider>
);
