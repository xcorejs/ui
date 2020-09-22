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
    variants: {
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
    <XcoreProvider>
      <Stack gap="1rem" direction="column">
        <Stack gap="1rem" alignItems="center">
          <Box>
            <Button>Button</Button>
          </Box>
          <Box>
            <Button v="outline">Button</Button>
          </Box>
          <Box>
            <Button v="clear">Button</Button>
          </Box>
          <Box>
            <Button v="link">Button</Button>
          </Box>
        </Stack>
        <Stack gap="1rem">
          <Box>
            <Button s="xs">Button</Button>
          </Box>
          <Box>
            <Button s="sm">Button</Button>
          </Box>
          <Box>
            <Button s="md">Button</Button>
          </Box>
          <Box>
            <Button s="lg">Button</Button>
          </Box>
        </Stack>
      </Stack>
    </XcoreProvider>
  );
};

export const CustomTheme: FC = () => (
  <XcoreProvider theme={theme}>
    <Stack gap="1rem" alignItems="center">
      <Box>
        <Button>Button</Button>
      </Box>
      <Box>
        <Button bg="navy">Button</Button>
      </Box>
      <Box>
        <Button v="outline">Button</Button>
      </Box>
      <Box>
        <Button s="lg">Button</Button>
      </Box>
      <Box>
        <Button s="lg" v="outline">Button</Button>
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
