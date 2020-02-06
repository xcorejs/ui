import { Box, Container, container, createTheme, useTheme } from 'index';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export default { title: 'Theme' };

const theme = createTheme({
  name: 'Container theme',
  ...container({
    width: '70%',
    background: 'grey'
  })
});

export const WithContainer: FC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Box width="100%">
        <Box background="red" color="white" p="10px" my="15px">
          Box 1
        </Box>
        <Box background="blue" color="white" p="10px" my="15px">
          Box 2
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);

export const GetThemeValue: FC = () => (
  <ThemeProvider theme={theme}>
    <ThemeToJSON />
  </ThemeProvider>
);

const ThemeToJSON: FC = () => {
  const t = useTheme();

  return <pre>{JSON.stringify(t, null, 2)}</pre>;
};
