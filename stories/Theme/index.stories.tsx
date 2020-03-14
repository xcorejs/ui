import React, { FC } from 'react';

import {
  Box,
  Button,
  colors,
  Container,
  container,
  createScales,
  createTheme,
  useTheme,
  XcoreProvider
} from '../../src';
import { darken, lightColorTheme } from '../../src/scales/colors';

export default { title: 'Theme' };

const theme = createTheme({
  name: 'Container theme',
  ...container({
    types: {
      normal: {
        width: '70%',
        bg: 'grey'
      }
    }
  }),
  ...createScales({
    ...colors(lightColorTheme, {
      primary: 'red'
    })
  })
});
export const WithContainer: FC = () => {
  return (
    <XcoreProvider theme={theme}>
      <Container flexDirection="column">
        <Box width="100%">
          <Box background="red" color="white" p="10px" my="15px">
            Box 1
          </Box>
          <Box background={darken('primary', 0.1)} color="text" p="10px" my="15px">
            Box 2
          </Box>
        </Box>
        <Button>Button</Button>
      </Container>
    </XcoreProvider>

  );
};

export const GetThemeValue: FC = () => (
  <XcoreProvider theme={theme}>
    <ThemeToJSON />
  </XcoreProvider>
);

const ThemeToJSON: FC = () => {
  const t = useTheme();

  return <pre>{JSON.stringify(t, null, 2)}</pre>;
};
