import React, { FC } from 'react';

import {
  ActiveBreakpoint,
  Box,
  breakpoints,
  Container,
  container,
  createScales,
  createTheme,
  useTheme,
  XcoreProvider
} from '../../src';

export default { title: 'Theme - Breakpoint' };

const theme = createTheme({
  name: 'Container theme',
  ...container({
    variants: {
      normal: {
        width: ['100%', '100%', '30rem', '40rem', '50rem', '70rem'],
        background: 'grey'
      }
    }
  }),
  ...createScales({
    ...breakpoints(['30em', '48em', '64em', '78em', '85em'])
  })
});

export const Aliases: FC = () => (
  <XcoreProvider theme={theme}>
    <Container>
      <Box width="100%" color="white" p="10px" my="15px">
        <ActiveBreakpoint />
        <GetAliases />
        <ThemeToJSON />
      </Box>
    </Container>
  </XcoreProvider>
);

const GetAliases: FC = () => {
  // eslint-disable-next-line no-shadow
  const { breakpoints } = useTheme();

  return (
    <pre>
      [0] {breakpoints[0]} | [xs] {breakpoints.xs} <br />
      [1] {breakpoints[1]} | [sm] {breakpoints.sm} <br />
      [2] {breakpoints[2]} | [md] {breakpoints.md} <br />
      [3] {breakpoints[3]} | [lg] {breakpoints.lg} <br />
      [4] {breakpoints[4]} | [xl] {breakpoints.xl} <br />
    </pre>
  );
};

const ThemeToJSON: FC = () => {
  const t = useTheme();

  return <pre>{JSON.stringify(t, null, 2)}</pre>;
};
