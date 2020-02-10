import { ActiveBreakpoint, Box, breakpoints, container, createTheme, Stack, Text } from 'index';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export default { title: 'Stack' };

export const BasicUsage: FC = () => {
  return (
    <Box>
      <Stack direction="column" spacing="10px">
        <Box background="red" color="white" p="10px" width="50%">
          Box 1
        </Box>
        <Box background="blue" color="white" p="10px" width="50%">
          Box 2
        </Box>
      </Stack>
      <Box>Lorem ipsum dolor sit amet</Box>
    </Box>
  );
};

const theme = createTheme({
  name: 'Container theme',
  ...breakpoints(['30em', '48em', '64em', '78em', '85em']),
  ...container({
    width: ['100%', '100%', '30rem', '40rem', '50rem', '70rem'],
    background: 'grey'
  })
});

export const Responsive: FC = () => (
  <ThemeProvider theme={theme}>
    <Box>
      <ActiveBreakpoint
        bg={['green', 'lime', 'crimson', 'red', 'blue', 'navy']}
        mb="1rem"
        fontSize="1rem"
        p=".5rem"
        color="white"
      />
      <Stack direction={{ _: 'column', md: 'row' }} spacing="10px">
        <Box background="crimson" color="white" p="10px" minWidth="50%">
          Box 1
        </Box>
        <Box background="navy" color="white" p="10px" minWidth="50%">
          Box 2
        </Box>
      </Stack>
      <Text>Lorem ipsum dolor sit amet</Text>
    </Box>
  </ThemeProvider>
);
