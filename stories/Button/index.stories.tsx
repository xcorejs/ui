import { Button, button, createTheme, Stack, Box, XcoreProvider } from '../../src';
import React, { FC } from 'react';

export default { title: 'Button' };

const theme = createTheme({
  ...button({
    default: {
      bg: 'crimson',
      color: 'white',
      p: '1rem',
      fontSize: '1rem',
      _leftIcon: {
        fill: '#fff'
      }
    },
    sizes: {
      lg: {
        padding: '3rem'
      }
    },
    types: {
      outline: {
        background: 'transparent',
        color: 'grey',
        border: '1px solid crimson'
      }
    }
  })
});

export const BasicUsage: FC = () => {
  return (
    <XcoreProvider theme={theme}>
      <Stack gap="10px">
        <Box>
          <Button>Button</Button>
        </Box>
        <Box>
          <Button bg="navy">Button</Button>
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
        <Box>
          <Button disabled>Disabled</Button>
        </Box>
      </Stack>
    </XcoreProvider>
  );
};
