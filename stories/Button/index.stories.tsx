import { Button, button, createTheme, Stack, Box } from 'index';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export default { title: 'Box' };

const theme = createTheme({
  ...button({
    default: {
      bg: 'crimson',
      color: 'white',
      p: '1rem',
      fontSize: '1rem'
    },
    sizes: {
      lg: {
        padding: '3rem'
      }
    },
    types: {
      outline: {
        background: 'transparent',
        color: 'red',
        border: '1px solid crimson'
      }
    }
  })
});

export const BasicUsage: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing="10px" direction="column">
        <Box>
          <Button>Button</Button>
        </Box>
        <Box>
          <Button bg="blue">Button</Button>
        </Box>
        <Box>
          <Button t="outline">Button</Button>
        </Box>
        <Box>
          <Button s="lg">Button</Button>
        </Box>
        <Box>
          <Button s="lg" t="outline">Button</Button>
        </Box>
        <Box>
          <Button as="a" href="example.com">Link</Button>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
